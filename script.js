// ============================================================
// CURSO PRIMARIA - Script Principal
// Versión: 2.0 | Autor: CursoPrimaria Team
// ============================================================

// === DATOS DE MÓDULOS ===
const modulesData = {
  matematicas: {
    name: 'Matemáticas',
    icon: '🔢',
    color: 'blue',
    subject: 'matematicas',
    description: 'Aprende números, operaciones, geometría y resolución de problemas de forma divertida.',
    difficulty: 3,
    youtubeId: 'fKzrsKROxWE',
    lessons: [
      { title: 'Números del 1 al 100', content: 'Aprendemos a contar y reconocer los números del 1 al 100. Los números son la base de las matemáticas y los usamos todos los días.' },
      { title: 'Suma y Resta', content: 'La suma nos permite juntar cantidades y la resta nos ayuda a encontrar la diferencia entre dos números.' },
      { title: 'Multiplicación básica', content: 'La multiplicación es una forma rápida de sumar grupos iguales. Por ejemplo, 3×4 significa sumar 3 cuatro veces.' },
      { title: 'Figuras geométricas', content: 'Las figuras geométricas están en todas partes: cuadrados, triángulos, círculos, rectángulos y muchas más.' }
    ],
    quiz: [
      { question: '¿Cuánto es 7 + 8?', options: ['13', '14', '15', '16'], correctIndex: 2 },
      { question: '¿Cuánto es 15 - 6?', options: ['7', '8', '9', '10'], correctIndex: 2 },
      { question: '¿Cuánto es 4 × 3?', options: ['10', '11', '12', '13'], correctIndex: 2 },
      { question: '¿Cuántos lados tiene un triángulo?', options: ['2', '3', '4', '5'], correctIndex: 1 },
      { question: '¿Cuál es el número que sigue después de 29?', options: ['28', '30', '31', '39'], correctIndex: 1 }
    ]
  },
  ciencias: {
    name: 'Ciencias Naturales',
    icon: '🔬',
    color: 'green',
    subject: 'ciencias',
    description: 'Explora el mundo natural: plantas, animales, el cuerpo humano y el universo.',
    difficulty: 2,
    youtubeId: 'p4fEAIpuqHU',
    lessons: [
      { title: 'Los seres vivos', content: 'Los seres vivos son todos los que nacen, crecen, se reproducen y mueren. Incluyen plantas, animales, hongos y microorganismos.' },
      { title: 'El cuerpo humano', content: 'Nuestro cuerpo tiene muchos sistemas: el respiratorio, el digestivo, el circulatorio. Cada uno cumple una función importante.' },
      { title: 'Las plantas', content: 'Las plantas producen su propio alimento mediante la fotosíntesis, usando la luz solar, agua y dióxido de carbono.' },
      { title: 'Los animales', content: 'Los animales se clasifican en vertebrados (con columna vertebral) e invertebrados. También se clasifican por su alimentación.' }
    ],
    quiz: [
      { question: '¿Qué proceso usan las plantas para producir su alimento?', options: ['Respiración', 'Fotosíntesis', 'Digestión', 'Circulación'], correctIndex: 1 },
      { question: '¿Cuántas patas tiene un insecto?', options: ['4', '6', '8', '10'], correctIndex: 1 },
      { question: '¿Qué órgano bombea la sangre en el cuerpo humano?', options: ['El pulmón', 'El hígado', 'El corazón', 'El estómago'], correctIndex: 2 },
      { question: '¿Qué necesitan las plantas para sobrevivir?', options: ['Solo agua', 'Agua, luz y tierra', 'Solo luz', 'Solo tierra'], correctIndex: 1 },
      { question: '¿Cómo se llaman los animales que producen leche para sus crías?', options: ['Reptiles', 'Aves', 'Mamíferos', 'Anfibios'], correctIndex: 2 }
    ]
  },
  espanol: {
    name: 'Español',
    icon: '📖',
    color: 'orange',
    subject: 'espanol',
    description: 'Mejora tu lectura, escritura, gramática y expresión oral en español.',
    difficulty: 2,
    youtubeId: 'me5_nji00JA',
    lessons: [
      { title: 'Las vocales y consonantes', content: 'El alfabeto español tiene 27 letras. Las vocales son: a, e, i, o, u. Las demás son consonantes.' },
      { title: 'Sílabas y palabras', content: 'Las palabras se dividen en sílabas. Según el número de sílabas, las palabras se llaman monosílabas, bisílabas, trisílabas o polisílabas.' },
      { title: 'Tipos de oraciones', content: 'Una oración tiene sujeto y predicado. Los tipos de oraciones incluyen afirmativas, negativas, interrogativas y exclamativas.' },
      { title: 'Sinónimos y antónimos', content: 'Los sinónimos son palabras con significado parecido. Los antónimos son palabras con significado contrario.' }
    ],
    quiz: [
      { question: '¿Cuántas vocales tiene el español?', options: ['3', '4', '5', '6'], correctIndex: 2 },
      { question: '¿Cuál de estas palabras es un sustantivo?', options: ['Rápido', 'Correr', 'Mesa', 'Bello'], correctIndex: 2 },
      { question: '¿Qué es un sinónimo de "feliz"?', options: ['Triste', 'Contento', 'Enojado', 'Asustado'], correctIndex: 1 },
      { question: '¿Cuántas sílabas tiene la palabra "mariposa"?', options: ['3', '4', '5', '6'], correctIndex: 1 },
      { question: '¿Cuál es el antónimo de "grande"?', options: ['Alto', 'Gordo', 'Pequeño', 'Ancho'], correctIndex: 2 }
    ]
  },
  historia: {
    name: 'Historia',
    icon: '🏛️',
    color: 'purple',
    subject: 'historia',
    description: 'Viaja en el tiempo y descubre las civilizaciones, culturas e historia de México y el mundo.',
    difficulty: 3,
    youtubeId: 'bVxTPQ9lhFw',
    lessons: [
      { title: 'Las civilizaciones antiguas', content: 'Las primeras civilizaciones surgieron hace miles de años cerca de los ríos: Mesopotamia, Egipto, India y China.' },
      { title: 'Los mayas y aztecas', content: 'Los mayas desarrollaron un sistema de escritura, calendario y astronomía. Los aztecas fundaron Tenochtitlán, la actual Ciudad de México.' },
      { title: 'La Conquista de México', content: 'En 1519 llegaron los españoles comandados por Hernán Cortés. En 1521 cayó Tenochtitlán y comenzó el período colonial.' },
      { title: 'La Independencia de México', content: 'El 16 de septiembre de 1810, Miguel Hidalgo lanzó el Grito de Independencia. En 1821 México logró su independencia de España.' }
    ],
    quiz: [
      { question: '¿Quién lanzó el Grito de Independencia de México?', options: ['Benito Juárez', 'Miguel Hidalgo', 'Emiliano Zapata', 'Hernán Cortés'], correctIndex: 1 },
      { question: '¿En qué año fue la Independencia de México?', options: ['1810', '1815', '1821', '1830'], correctIndex: 2 },
      { question: '¿Cómo se llamaba la capital del Imperio Azteca?', options: ['Teotihuacán', 'Tenochtitlán', 'Chichén Itzá', 'Palenque'], correctIndex: 1 },
      { question: '¿En qué continente está México?', options: ['Europa', 'África', 'Asia', 'América'], correctIndex: 3 },
      { question: '¿Qué civilización construyó las pirámides de Egipto?', options: ['Los griegos', 'Los romanos', 'Los egipcios', 'Los mayas'], correctIndex: 2 }
    ]
  },
  'educacion-fisica': {
    name: 'Educación Física',
    icon: '🏃',
    color: 'red',
    subject: 'educacion-fisica',
    description: 'Descubre la importancia del deporte, la salud, el trabajo en equipo y el bienestar físico.',
    difficulty: 1,
    youtubeId: 'jsqONxiLcYM',
    lessons: [
      { title: 'Calentamiento y estiramiento', content: 'Antes de cualquier actividad física es importante calentar los músculos para evitar lesiones. El estiramiento mejora la flexibilidad.' },
      { title: 'Deportes en equipo', content: 'El fútbol, baloncesto y voleibol son deportes en equipo. Aprenden valores como la cooperación, respeto y compañerismo.' },
      { title: 'Alimentación saludable', content: 'Para tener energía y rendir en el deporte necesitamos comer frutas, verduras, proteínas y carbohidratos. Beber agua es esencial.' },
      { title: 'El cuerpo en movimiento', content: 'La actividad física mejora el corazón, los músculos y los huesos. Se recomienda al menos 60 minutos de ejercicio al día para niños.' }
    ],
    quiz: [
      { question: '¿Cuántos jugadores tiene un equipo de fútbol?', options: ['9', '10', '11', '12'], correctIndex: 2 },
      { question: '¿Qué se debe hacer ANTES de hacer ejercicio?', options: ['Comer mucho', 'Calentar y estirar', 'Dormir', 'Bañarse'], correctIndex: 1 },
      { question: '¿Cuántos minutos de ejercicio al día se recomiendan para niños?', options: ['15 minutos', '30 minutos', '60 minutos', '120 minutos'], correctIndex: 2 },
      { question: '¿Cuál de estos es un deporte de equipo?', options: ['Natación', 'Atletismo', 'Voleibol', 'Golf'], correctIndex: 2 },
      { question: '¿Qué bebida es mejor para hidratarse durante el ejercicio?', options: ['Refresco', 'Jugo con azúcar', 'Agua', 'Leche'], correctIndex: 2 }
    ]
  }
};

// === DATOS DE LOGROS ===
const achievementsData = [
  { id: 'first_quiz',    name: '¡Primer Quiz!',     icon: '🎯', description: 'Completa tu primer quiz',          condition: 'quizDone >= 1',    unlocked: false },
  { id: 'perfect_score', name: 'Puntuación Perfecta', icon: '⭐', description: 'Obtén 5/5 en un quiz',           condition: 'perfectQuiz >= 1', unlocked: false },
  { id: 'bookworm',      name: 'Ratón de Biblioteca', icon: '📚', description: 'Abre 3 lecciones distintas',      condition: 'lessonsOpen >= 3', unlocked: false },
  { id: 'explorer',      name: 'Explorador',         icon: '🌍', description: 'Visita los 5 módulos',            condition: 'modulesVisited >= 5', unlocked: false },
  { id: 'hundred_pts',   name: '100 Puntos',         icon: '💯', description: 'Acumula 100 puntos',              condition: 'points >= 100',    unlocked: false },
  { id: 'five_hundred',  name: '500 Puntos',         icon: '🏆', description: 'Acumula 500 puntos',              condition: 'points >= 500',    unlocked: false },
  { id: 'quizmaster',    name: 'Quiz Master',        icon: '🧠', description: 'Completa quizzes de 3 materias',  condition: 'subjectsQuizzed >= 3', unlocked: false },
  { id: 'champion',      name: 'Campeón Escolar',    icon: '🥇', description: 'Completa todos los módulos',      condition: 'modulesCompleted >= 5', unlocked: false }
];

// === ESTADO GLOBAL ===
const state = {
  studentName: '',
  grade: '',
  favoriteSubject: '',
  avatar: '🎒',
  points: 0,
  modulesCompleted: [],
  activitiesDone: [],
  medalsGanadas: [],
  quizDone: 0,
  perfectQuiz: 0,
  lessonsOpen: 0,
  modulesVisited: new Set(),
  subjectsQuizzed: new Set(),
  progress: {
    matematicas: 0,
    ciencias: 0,
    espanol: 0,
    historia: 0,
    'educacion-fisica': 0
  },
  activityLog: [],
  currentQuiz: null,
  currentQuestionIndex: 0,
  quizScore: 0,
  currentLesson: null
};

// === STUDENT IDENTITY ===
function getStudentId() {
  const KEY = 'cursoPrimaria_studentId';
  let id = localStorage.getItem(KEY);
  if (!id) {
    // Generate a stable random UUID-like identifier
    id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    localStorage.setItem(KEY, id);
  }
  return id;
}

// === LOCALSTORAGE ===
function saveState() {
  const toSave = {
    ...state,
    modulesVisited: Array.from(state.modulesVisited),
    subjectsQuizzed: Array.from(state.subjectsQuizzed)
  };
  localStorage.setItem('cursoPrimaria_v2', JSON.stringify(toSave));
  saveStateToServerDebounced();
}

function loadState() {
  const saved = localStorage.getItem('cursoPrimaria_v2');
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
    state.modulesVisited = new Set(parsed.modulesVisited || []);
    state.subjectsQuizzed = new Set(parsed.subjectsQuizzed || []);
    if (!state.activityLog) state.activityLog = [];
    if (!state.progress)    state.progress = { matematicas: 0, ciencias: 0, espanol: 0, historia: 0, 'educacion-fisica': 0 };
  } catch (e) {
    console.warn('Could not load state:', e);
  }
}

// === SERVER SYNC ===
let _saveDebounceTimer = null;

function saveStateToServerDebounced() {
  if (_saveDebounceTimer) clearTimeout(_saveDebounceTimer);
  _saveDebounceTimer = setTimeout(saveStateToServer, 2000);
}

async function saveStateToServer() {
  try {
    const studentId = getStudentId();
    const toSave = {
      ...state,
      modulesVisited: Array.from(state.modulesVisited),
      subjectsQuizzed: Array.from(state.subjectsQuizzed)
    };
    await fetch('/api/state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user': studentId
      },
      body: JSON.stringify({ state: toSave })
    });
  } catch (e) {
    console.warn('Could not save state to server:', e);
  }
}

async function loadStateFromServer() {
  try {
    const studentId = getStudentId();
    const res = await fetch('/api/state', {
      headers: { 'x-user': studentId }
    });
    if (!res.ok) return false;
    const data = await res.json();
    if (!data?.state) return false;

    Object.assign(state, data.state);
    state.modulesVisited  = new Set(data.state.modulesVisited  || []);
    state.subjectsQuizzed = new Set(data.state.subjectsQuizzed || []);
    if (!state.activityLog) state.activityLog = [];
    if (!state.progress)    state.progress = { matematicas: 0, ciencias: 0, espanol: 0, historia: 0, 'educacion-fisica': 0 };
    return true;
  } catch (e) {
    console.warn('Could not load state from server:', e);
    return false;
  }
}

// === MULTI-STUDENT / SWITCH STUDENT ===
function getPartialStudentId() {
  const id = localStorage.getItem('cursoPrimaria_studentId') || '';
  if (!id) return '—';
  const SHOW = 4; // characters to show at each end
  if (id.length <= SHOW * 2) return id; // too short to mask, show full
  return id.substring(0, SHOW) + '…' + id.substring(id.length - SHOW);
}

function displayStudentId() {
  const el = document.getElementById('student-id-text');
  if (el) el.textContent = getPartialStudentId();
}

function resetStudentState() {
  // Remove stored identity and progress
  localStorage.removeItem('cursoPrimaria_studentId');
  localStorage.removeItem('cursoPrimaria_v2');

  // Reset in-memory state to defaults
  state.studentName     = '';
  state.grade           = '';
  state.favoriteSubject = '';
  state.avatar          = '🎒';
  state.points          = 0;
  state.modulesCompleted = [];
  state.activitiesDone  = [];
  state.medalsGanadas   = [];
  state.quizDone        = 0;
  state.perfectQuiz     = 0;
  state.lessonsOpen     = 0;
  state.modulesVisited  = new Set();
  state.subjectsQuizzed = new Set();
  state.progress        = { matematicas: 0, ciencias: 0, espanol: 0, historia: 0, 'educacion-fisica': 0 };
  state.activityLog     = [];
  state.currentQuiz     = null;
  state.currentQuestionIndex = 0;
  state.quizScore       = 0;
  state.currentLesson   = null;

  // Also reset achievements unlocked flags
  achievementsData.forEach(a => { a.unlocked = false; });
}

function openSwitchStudentModal() {
  const modal = document.getElementById('switch-student-modal');
  if (modal) modal.removeAttribute('hidden');
}

function closeSwitchStudentModal() {
  const modal = document.getElementById('switch-student-modal');
  if (modal) modal.setAttribute('hidden', '');
}

function confirmSwitchStudent() {
  closeSwitchStudentModal();
  resetStudentState();
  // Reload to reinitialize everything (generates a new studentId)
  location.reload();
}

function initSwitchStudentModal() {
  const openBtn   = document.getElementById('btn-switch-student');
  const cancelBtn = document.getElementById('switch-student-cancel');
  const confirmBtn = document.getElementById('switch-student-confirm');
  const overlay   = document.getElementById('switch-student-modal');

  if (openBtn)    openBtn.addEventListener('click', openSwitchStudentModal);
  if (cancelBtn)  cancelBtn.addEventListener('click', closeSwitchStudentModal);
  if (confirmBtn) confirmBtn.addEventListener('click', confirmSwitchStudent);

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSwitchStudentModal();
    });
  }
}

// === LOADING SCREEN ===
window.addEventListener('load', () => {
  setTimeout(() => {
    const screen = document.getElementById('loading-screen');
    if (screen) screen.classList.add('hidden');
  }, 1500);
});

// === NAVBAR ===
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const links     = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on nav link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Active section highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// === HERO ANIMATIONS ===
function initHeroAnimations() {
  const subtitleEl = document.getElementById('hero-subtitle');
  if (!subtitleEl) return;
  const texts = [
    'Explora, aprende y diviértete con contenido interactivo.',
    'Completa quizzes y gana puntos y medallas.',
    'Tu aventura educativa comienza aquí. ¡Vamos! 🎉'
  ];
  let idx = 0;
  function typeText(text, i = 0) {
    if (i <= text.length) {
      subtitleEl.textContent = text.substring(0, i);
      setTimeout(() => typeText(text, i + 1), 40);
    } else {
      setTimeout(() => {
        idx = (idx + 1) % texts.length;
        setTimeout(() => typeText(texts[idx]), 300);
      }, 3000);
    }
  }
  typeText(texts[idx]);
}

// === STATS UPDATE ===
function updateStats() {
  setEl('stat-points',     state.points);
  setEl('stat-modules',    state.modulesCompleted.length);
  setEl('stat-activities', state.activitiesDone.length);
  setEl('stat-medals',     state.medalsGanadas.length);
  setEl('user-points',     state.points);

  const totalSubjects = 5;
  const overallPct = Math.round((state.modulesCompleted.length / totalSubjects) * 100);
  const bar = document.getElementById('overall-progress');
  const pct = document.getElementById('overall-percent');
  if (bar) bar.style.width = overallPct + '%';
  if (pct) pct.textContent = overallPct + '%';
}

function setEl(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// === MODULES ===
function renderModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.entries(modulesData).forEach(([key, mod]) => {
    const prog  = state.progress[key] || 0;
    const done  = state.modulesCompleted.includes(key);
    const stars = buildStars(mod.difficulty);

    const card = document.createElement('div');
    card.className = 'module-card';
    card.setAttribute('data-subject', key);

    card.innerHTML = `
      <div class="module-header">
        <span class="module-icon">${mod.icon}</span>
        <div class="module-title">${mod.name} ${done ? '✅' : ''}</div>
        <div class="module-lessons">${mod.lessons.length} lecciones</div>
      </div>
      <div class="module-body">
        <p class="module-desc">${mod.description}</p>
        <div class="module-difficulty">
          Dificultad: <span class="stars">${stars}</span>
        </div>
        <div>
          <div class="module-progress-info">
            <span>Progreso</span><span>${prog}%</span>
          </div>
          <div class="progress-bar-track module-progress">
            <div class="progress-bar-fill" style="width:${prog}%"></div>
          </div>
        </div>
      </div>
      <div class="module-actions">
        <button class="btn-module btn-lesson" onclick="openLesson('${key}')">
          <i class="fas fa-play-circle"></i> Ver Lección
        </button>
        <button class="btn-module btn-quiz" onclick="startQuiz('${key}')">
          <i class="fas fa-question-circle"></i> Quiz Rápido
        </button>
        <button class="btn-module btn-download" onclick="downloadResources('${key}')">
          <i class="fas fa-download"></i> Descargar
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function buildStars(difficulty) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= difficulty ? 'filled' : 'empty'}">★</span>`;
  }
  return html;
}

function openLesson(subject) {
  const mod = modulesData[subject];
  if (!mod) return;

  state.modulesVisited.add(subject);
  state.lessonsOpen = (state.lessonsOpen || 0) + 1;

  if (!state.activitiesDone.includes(`lesson_${subject}`)) {
    state.activitiesDone.push(`lesson_${subject}`);
    addToLog(`📖 Abriste la lección de ${mod.name}`);
    addPoints(10, `Lección abierta: ${mod.name}`);
  }

  state.currentLesson = subject;
  saveState();
  checkAchievements();
  updateStats();

  const modal     = document.getElementById('lesson-modal');
  const titleEl   = document.getElementById('lesson-title');
  const bodyEl    = document.getElementById('lesson-body');

  titleEl.textContent = `${mod.icon} ${mod.name}`;

  let lessonsHTML = mod.lessons.map((lesson, i) => `
    <div class="lesson-content" style="margin-bottom:20px;padding-bottom:20px;border-bottom:${i < mod.lessons.length - 1 ? '1px solid #eee' : 'none'}">
      <h4>${i + 1}. ${lesson.title}</h4>
      <p>${lesson.content}</p>
    </div>
  `).join('');

  bodyEl.innerHTML = `
    ${lessonsHTML}
    <div class="lesson-video">
      <iframe
        src="https://www.youtube.com/embed/${mod.youtubeId}?rel=0"
        title="Video educativo de ${mod.name}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  `;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function startQuiz(subject) {
  const mod = modulesData[subject];
  if (!mod) return;

  state.modulesVisited.add(subject);
  state.currentQuiz    = subject;
  state.currentQuestionIndex = 0;
  state.quizScore      = 0;

  const modal  = document.getElementById('quiz-modal');
  const title  = document.getElementById('quiz-title');
  const results = document.getElementById('quiz-results');
  const body   = modal.querySelector('.quiz-body');
  const footer = modal.querySelector('.modal-footer');

  title.textContent = `${mod.icon} Quiz: ${mod.name}`;
  results.setAttribute('hidden', '');
  body.style.display   = '';
  footer.style.display = '';

  setEl('quiz-current-score', 0);

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  showQuestion();
  saveState();
}

function downloadResources(subject) {
  const mod = modulesData[subject];
  if (!mod) return;
  showNotification(`📥 Los recursos de ${mod.name} estarán disponibles próximamente.`, 'info');
  addPoints(5, `Descarga intentada: ${mod.name}`);
  saveState();
  updateStats();
}

// === QUIZ SYSTEM ===
function showQuestion() {
  const mod  = modulesData[state.currentQuiz];
  if (!mod) return;
  const q    = mod.quiz[state.currentQuestionIndex];
  const total = mod.quiz.length;

  setEl('quiz-progress-text', `Pregunta ${state.currentQuestionIndex + 1} de ${total}`);

  const progressBar = document.getElementById('quiz-progress-bar');
  if (progressBar) progressBar.style.width = `${((state.currentQuestionIndex + 1) / total) * 100}%`;

  setEl('quiz-question', q.question);

  const optionsEl = document.getElementById('quiz-options');
  if (!optionsEl) return;
  optionsEl.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.innerHTML = `<strong>${letters[i]}.</strong> ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });

  const nextBtn = document.getElementById('quiz-next');
  if (nextBtn) nextBtn.disabled = true;
}

function selectAnswer(index) {
  const mod = modulesData[state.currentQuiz];
  if (!mod) return;
  const q = mod.quiz[state.currentQuestionIndex];
  const buttons = document.querySelectorAll('.quiz-option-btn');

  buttons.forEach(b => { b.disabled = true; });

  if (index === q.correctIndex) {
    buttons[index].classList.add('correct');
    state.quizScore++;
    setEl('quiz-current-score', state.quizScore * 20);
    showNotification('✅ ¡Respuesta correcta!', 'success');
  } else {
    buttons[index].classList.add('wrong');
    buttons[q.correctIndex].classList.add('correct');
    showNotification('❌ Respuesta incorrecta. ¡Sigue intentando!', 'error');
  }

  const nextBtn = document.getElementById('quiz-next');
  if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion() {
  const mod = modulesData[state.currentQuiz];
  if (!mod) return;

  state.currentQuestionIndex++;

  if (state.currentQuestionIndex >= mod.quiz.length) {
    showQuizResults();
  } else {
    showQuestion();
  }
}

function showQuizResults() {
  const mod    = modulesData[state.currentQuiz];
  const score  = state.quizScore;
  const total  = mod.quiz.length;
  const points = calculateScore(score, total);

  // Update counters
  state.quizDone = (state.quizDone || 0) + 1;
  if (score === total) state.perfectQuiz = (state.perfectQuiz || 0) + 1;
  state.subjectsQuizzed.add(state.currentQuiz);

  if (!state.activitiesDone.includes(`quiz_${state.currentQuiz}`)) {
    state.activitiesDone.push(`quiz_${state.currentQuiz}`);
  }

  addToLog(`🎯 Completaste el quiz de ${mod.name}: ${score}/${total}`);
  addPoints(points, `Quiz de ${mod.name}: ${score}/${total}`);

  const pct = score / total;
  let emoji, title, message;
  if (pct === 1)       { emoji = '🏆'; title = '¡Perfecto!';       message = '¡Respondiste todo correctamente! ¡Eres increíble!'; }
  else if (pct >= 0.8) { emoji = '🎉'; title = '¡Excelente!';      message = '¡Muy bien! Casi lo tienes perfecto.'; }
  else if (pct >= 0.6) { emoji = '👍'; title = '¡Bien hecho!';     message = 'Buen trabajo, sigue practicando para mejorar.'; }
  else if (pct >= 0.4) { emoji = '📚'; title = '¡Sigue estudiando!'; message = 'Necesitas repasar un poco más. ¡Tú puedes!'; }
  else                 { emoji = '💪'; title = '¡No te rindas!';    message = 'Repasa las lecciones e intenta de nuevo.'; }

  setEl('results-emoji',   emoji);
  setEl('results-title',   title);
  setEl('results-message', message);
  setEl('results-score',   score);
  setEl('results-points',  points);

  const body   = document.querySelector('#quiz-modal .quiz-body');
  const footer = document.querySelector('#quiz-modal .modal-footer');
  const results = document.getElementById('quiz-results');

  if (body)   body.style.display   = 'none';
  if (footer) footer.style.display = 'none';
  if (results) results.removeAttribute('hidden');

  updateProgressBars();
  markModuleComplete(state.currentQuiz);
  checkAchievements();
  renderAchievements();
  updateStats();
  renderModules();
  updateDashboard();
  saveState();
}

function calculateScore(correct, total) {
  const pct = correct / total;
  if (pct === 1)    return 100;
  if (pct >= 0.8)   return 70;
  if (pct >= 0.6)   return 50;
  if (pct >= 0.4)   return 30;
  return 10;
}

function closeQuiz() {
  const modal = document.getElementById('quiz-modal');
  if (modal) modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  state.currentQuiz = null;
}

// === PROGRESS TRACKING ===
function updateProgressBars() {
  Object.keys(state.progress).forEach(subject => {
    const done = state.modulesCompleted.includes(subject);
    if (done) {
      state.progress[subject] = 100;
    } else if (state.activitiesDone.includes(`quiz_${subject}`) || state.activitiesDone.includes(`lesson_${subject}`)) {
      const base = state.activitiesDone.includes(`lesson_${subject}`) ? 30 : 0;
      const quiz = state.activitiesDone.includes(`quiz_${subject}`)   ? 50 : 0;
      state.progress[subject] = Math.min(base + quiz, 80);
    }
  });
  renderModules();
  updateDashboard();
  saveState();
}

function markModuleComplete(subject) {
  if (!state.modulesCompleted.includes(subject)) {
    state.modulesCompleted.push(subject);
    state.progress[subject] = 100;
    const mod = modulesData[subject];
    if (mod) {
      addToLog(`✅ Completaste el módulo de ${mod.name}`);
      showNotification(`🏅 ¡Módulo de ${mod.name} completado!`, 'success');
    }
  }
}

// === ACHIEVEMENTS ===
function checkAchievements() {
  achievementsData.forEach(ach => {
    if (ach.unlocked) return;
    let unlock = false;

    if (ach.id === 'first_quiz'    && state.quizDone >= 1)                      unlock = true;
    if (ach.id === 'perfect_score' && state.perfectQuiz >= 1)                   unlock = true;
    if (ach.id === 'bookworm'      && state.lessonsOpen >= 3)                    unlock = true;
    if (ach.id === 'explorer'      && state.modulesVisited.size >= 5)            unlock = true;
    if (ach.id === 'hundred_pts'   && state.points >= 100)                       unlock = true;
    if (ach.id === 'five_hundred'  && state.points >= 500)                       unlock = true;
    if (ach.id === 'quizmaster'    && state.subjectsQuizzed.size >= 3)           unlock = true;
    if (ach.id === 'champion'      && state.modulesCompleted.length >= 5)        unlock = true;

    if (unlock) {
      ach.unlocked = true;
      state.medalsGanadas.push(ach.id);
      addToLog(`🏅 ¡Lograste "${ach.name}"!`);
      showNotification(`🏅 ¡Nuevo logro desbloqueado: ${ach.name}!`, 'warning');
    }
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  grid.innerHTML = '';

  achievementsData.forEach(ach => {
    const card = document.createElement('div');
    card.className = `achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <span class="achievement-badge">${ach.icon}</span>
      <div class="achievement-name">${ach.name}</div>
      <div class="achievement-desc">${ach.description}</div>
      <span class="achievement-status">${ach.unlocked ? '✅ Desbloqueado' : '🔒 Bloqueado'}</span>
    `;
    grid.appendChild(card);
  });
}

// === CALENDAR ===
let calYear, calMonth;

function renderCalendar(year, month) {
  const now = new Date();
  if (year  === undefined) year  = now.getFullYear();
  if (month === undefined) month = now.getMonth();
  calYear  = year;
  calMonth = month;

  const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  setEl('cal-month-title', `${monthNames[month]} ${year}`);

  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = now.getDate();
  const isThisMonth = now.getFullYear() === year && now.getMonth() === month;

  // Activity days (e.g., 5, 12, 19, 26 of each month)
  const activityDays = new Set([5, 12, 19, 26]);

  // Fill blanks
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    blank.className = 'cal-day empty';
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayEl  = document.createElement('div');
    const dayOfWeek = new Date(year, month, d).getDay(); // 0=Sun, 6=Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isClassDay = !isWeekend; // Mon-Fri are class days
    const isToday = isThisMonth && d === today;
    const isActivity = activityDays.has(d) && !isWeekend;

    let cls = 'cal-day';
    if (isToday)       cls += ' today';
    else if (isActivity) cls += ' activity-day';
    else if (isClassDay) cls += ' class-day';
    else                 cls += ' weekend';

    dayEl.className   = cls;
    dayEl.textContent = d;

    if (isClassDay && !isToday) {
      dayEl.title = isActivity ? 'Actividad programada' : 'Día de clase';
    }

    grid.appendChild(dayEl);
  }
}

function initCalendarNav() {
  const prevBtn = document.getElementById('cal-prev');
  const nextBtn = document.getElementById('cal-next');

  if (prevBtn) prevBtn.addEventListener('click', () => {
    let m = calMonth - 1;
    let y = calYear;
    if (m < 0) { m = 11; y--; }
    renderCalendar(y, m);
  });

  if (nextBtn) nextBtn.addEventListener('click', () => {
    let m = calMonth + 1;
    let y = calYear;
    if (m > 11) { m = 0; y++; }
    renderCalendar(y, m);
  });
}

// === PROFILE ===
function loadProfile() {
  const nameInput    = document.getElementById('student-name');
  const gradeInput   = document.getElementById('student-grade');
  const subjectInput = document.getElementById('favorite-subject');
  const avatarEl     = document.getElementById('profile-avatar');
  const navName      = document.getElementById('nav-student-name');

  if (nameInput  && state.studentName)    nameInput.value  = state.studentName;
  if (gradeInput && state.grade)          gradeInput.value = state.grade;
  if (subjectInput && state.favoriteSubject) subjectInput.value = state.favoriteSubject;
  if (avatarEl   && state.avatar)         avatarEl.textContent = state.avatar;
  if (navName    && state.studentName)    navName.textContent  = state.studentName;

  // Highlight active avatar btn
  document.querySelectorAll('.avatar-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.avatar === state.avatar);
  });
}

function saveProfile() {
  const name    = document.getElementById('student-name')?.value.trim();
  const grade   = document.getElementById('student-grade')?.value;
  const subject = document.getElementById('favorite-subject')?.value;

  if (!name) { showNotification('⚠️ Por favor escribe tu nombre.', 'error'); return; }
  if (!grade) { showNotification('⚠️ Por favor selecciona tu grado.', 'error'); return; }

  state.studentName    = name;
  state.grade          = grade;
  state.favoriteSubject = subject || '';

  const navName = document.getElementById('nav-student-name');
  if (navName) navName.textContent = name;

  addPoints(5, 'Perfil guardado');
  saveState();
  updateStats();
  showNotification(`✅ ¡Perfil de ${name} guardado correctamente!`, 'success');
}

function initProfileForm() {
  const form = document.getElementById('profile-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      saveProfile();
    });
  }

  document.querySelectorAll('.avatar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.avatar = btn.dataset.avatar;
      const avatarEl = document.getElementById('profile-avatar');
      if (avatarEl) avatarEl.textContent = state.avatar;
      document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      saveState();
    });
  });
}

// === CONTACT FORM ===
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('contact-name')?.value.trim();
    const email   = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value;
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !subject || !message) {
      showNotification('⚠️ Por favor completa todos los campos.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('⚠️ Por favor ingresa un correo válido.', 'error');
      return;
    }

    // Simulate send
    showNotification('📨 ¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
    form.reset();
    addPoints(5, 'Formulario de contacto enviado');
    saveState();
    updateStats();
  });
}

// === NOTIFICATIONS ===
let notifTimeout = null;

function showNotification(message, type = 'info') {
  const notif   = document.getElementById('notification');
  const msgEl   = document.getElementById('notification-message');
  const iconEl  = document.getElementById('notification-icon');

  if (!notif || !msgEl) return;

  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-star' };

  notif.className = `notification ${type}`;
  msgEl.textContent = message;
  iconEl.innerHTML  = `<i class="fas ${icons[type] || 'fa-info-circle'}"></i>`;
  notif.removeAttribute('hidden');

  if (notifTimeout) clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => {
    notif.setAttribute('hidden', '');
  }, 4000);
}

function initNotificationClose() {
  const closeBtn = document.getElementById('notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('notification').setAttribute('hidden', '');
      if (notifTimeout) clearTimeout(notifTimeout);
    });
  }
}

// === POINTS SYSTEM ===
function addPoints(amount, reason) {
  state.points += amount;
  setEl('user-points', state.points);
  setEl('stat-points', state.points);
  saveState();
  checkAchievements();
}

// === ACTIVITY LOG ===
function addToLog(text) {
  if (!state.activityLog) state.activityLog = [];
  const now = new Date();
  const time = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  state.activityLog.unshift({ text, time });
  if (state.activityLog.length > 20) state.activityLog.pop();
  renderActivityLog();
}

function renderActivityLog() {
  const logEl = document.getElementById('activity-log');
  if (!logEl) return;
  if (!state.activityLog || state.activityLog.length === 0) {
    logEl.innerHTML = '<li class="activity-log-empty"><i class="fas fa-inbox"></i> No hay actividades aún</li>';
    return;
  }
  logEl.innerHTML = state.activityLog.slice(0, 10).map(item => `
    <li><span>${item.text}</span><small style="color:#aaa;margin-left:auto;white-space:nowrap">${item.time}</small></li>
  `).join('');
}

// === DASHBOARD ===
function updateDashboard() {
  const chartBars = document.getElementById('chart-bars');
  if (!chartBars) return;

  const subjects = [
    { key: 'matematicas',     label: 'Matemáticas', cssClass: 'math'    },
    { key: 'ciencias',        label: 'Ciencias',    cssClass: 'science' },
    { key: 'espanol',         label: 'Español',     cssClass: 'spanish' },
    { key: 'historia',        label: 'Historia',    cssClass: 'history' },
    { key: 'educacion-fisica', label: 'Ed. Física',  cssClass: 'pe'     }
  ];

  chartBars.innerHTML = subjects.map(s => {
    const pct = state.progress[s.key] || 0;
    return `
      <div class="chart-bar-item">
        <span class="chart-bar-label">${s.label}</span>
        <div class="chart-bar-track">
          <div class="chart-bar-fill ${s.cssClass}" style="width:${pct}%"></div>
        </div>
        <span class="chart-bar-percent">${pct}%</span>
      </div>
    `;
  }).join('');

  renderActivityLog();
}

// === QUIZ MODAL EVENTS ===
function initQuizModal() {
  const nextBtn   = document.getElementById('quiz-next');
  const closeBtn  = document.getElementById('quiz-close');
  const retryBtn  = document.getElementById('quiz-retry');
  const finishBtn = document.getElementById('quiz-finish');

  if (nextBtn)   nextBtn.addEventListener('click',   nextQuestion);
  if (closeBtn)  closeBtn.addEventListener('click',  closeQuiz);
  if (retryBtn)  retryBtn.addEventListener('click', () => { closeQuiz(); startQuiz(state.currentQuiz || 'matematicas'); });
  if (finishBtn) finishBtn.addEventListener('click', closeQuiz);

  const overlay = document.getElementById('quiz-modal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQuiz();
    });
  }
}

// === LESSON MODAL EVENTS ===
function initLessonModal() {
  const closeBtn    = document.getElementById('lesson-close');
  const completeBtn = document.getElementById('lesson-complete-btn');
  const overlay     = document.getElementById('lesson-modal');

  if (closeBtn) closeBtn.addEventListener('click', () => {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    // Stop any video playing
    const iframe = overlay.querySelector('iframe');
    if (iframe) iframe.src = iframe.src;
  });

  if (completeBtn) completeBtn.addEventListener('click', () => {
    if (state.currentLesson) {
      markModuleComplete(state.currentLesson);
      updateProgressBars();
      updateStats();
      renderModules();
      updateDashboard();
      checkAchievements();
      renderAchievements();
      saveState();
    }
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  });

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
        const iframe = overlay.querySelector('iframe');
        if (iframe) iframe.src = iframe.src;
      }
    });
  }
}

// === ESC key closes modals ===
function initKeyboardListeners() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const quizModal   = document.getElementById('quiz-modal');
      const lessonModal = document.getElementById('lesson-modal');
      if (quizModal   && !quizModal.hasAttribute('hidden'))   closeQuiz();
      if (lessonModal && !lessonModal.hasAttribute('hidden')) {
        lessonModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      }
    }
  });
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', async () => {
  loadState();

  // Try to load latest state from server (falls back to localStorage silently)
  const serverLoaded = await loadStateFromServer();
  if (serverLoaded) {
    // Re-save local copy with the fresher server data
    const toSave = {
      ...state,
      modulesVisited: Array.from(state.modulesVisited),
      subjectsQuizzed: Array.from(state.subjectsQuizzed)
    };
    localStorage.setItem('cursoPrimaria_v2', JSON.stringify(toSave));
  }

  // Flush any pending debounced save when the user navigates away
  window.addEventListener('beforeunload', () => {
    if (_saveDebounceTimer) {
      clearTimeout(_saveDebounceTimer);
      _saveDebounceTimer = null;
      saveStateToServer();
    }
  });

  initNavbar();
  initHeroAnimations();
  renderModules();
  renderCalendar();
  initCalendarNav();
  renderAchievements();
  updateStats();
  updateDashboard();
  loadProfile();
  initProfileForm();
  initContactForm();
  initQuizModal();
  initLessonModal();
  initNotificationClose();
  initKeyboardListeners();
  displayStudentId();
  initSwitchStudentModal();

  // Animate chart bars on scroll into view
  const dashboardSection = document.getElementById('progreso');
  if (dashboardSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateDashboard();
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(dashboardSection);
  }
});
