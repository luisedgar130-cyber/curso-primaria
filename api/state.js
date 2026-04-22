import { neon } from '@neondatabase/serverless';

// Validates that the studentId looks like a UUID v4
function isValidStudentId(id) {
  return typeof id === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
}

export default async function handler(req, res) {
  // Guard: DATABASE_URL must be set
  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ error: 'Database not configured' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    const studentId = (req.headers['x-user'] || '').toString().trim();

    if (!studentId) {
      return res.status(400).json({ error: 'Missing x-user header (student identifier)' });
    }

    if (!isValidStudentId(studentId)) {
      return res.status(400).json({ error: 'Invalid x-user header value' });
    }

    // Upsert the student row so we always have an id to work with
    const students = await sql`
      insert into students (username)
      values (${studentId})
      on conflict (username) do update set username = excluded.username
      returning id
    `;
    const dbStudentId = students[0].id;

    // ── GET ─────────────────────────────────────────────────────────────────
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'no-store');

      const rows = await sql`
        select state, updated_at
        from student_state
        where student_id = ${dbStudentId}
      `;

      if (rows.length === 0) {
        return res.status(200).json({ state: null });
      }

      return res.status(200).json({
        state: rows[0].state,
        updated_at: rows[0].updated_at
      });
    }

    // ── POST ────────────────────────────────────────────────────────────────
    if (req.method === 'POST') {
      const body = req.body || {};
      const { state } = body;

      if (!state || typeof state !== 'object' || Array.isArray(state)) {
        return res.status(400).json({ error: 'Body must be { state: { ... } }' });
      }

      await sql`
        insert into student_state (student_id, state, updated_at)
        values (${dbStudentId}, ${JSON.stringify(state)}::jsonb, now())
        on conflict (student_id) do update
          set state      = excluded.state,
              updated_at = now()
      `;

      return res.status(200).json({ ok: true });
    }

    // ── Method not allowed ───────────────────────────────────────────────────
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('[api/state]', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
