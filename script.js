/**
 * script.js — Curso de Primaria
 * Sistema interactivo de aprendizaje con gamificación
 * Vanilla JS • localStorage • Sin dependencias externas
 */

/* ============================================================
   DATOS DEL CURSO
   ============================================================ */

const MODULES_DATA = {
    matematicas: {
        id: 'matematicas',
        title: 'Matemáticas',
        icon: '📐',
        color: '#8E44AD',
        subtitle: 'Números, operaciones y resolución de problemas',
        theory: [
            {
                heading: '🔢 Los Números y el Sistema Decimal',
                text: 'Los números son la base de las matemáticas. El sistema decimal usa diez dígitos (0-9) para representar cualquier cantidad. El valor de cada cifra depende de su posición: unidades, decenas, centenas y millares.',
                list: ['Unidad: 1', 'Decena: 10', 'Centena: 100', 'Millar: 1,000']
            },
            {
                heading: '➕➖ Suma y Resta',
                text: 'La suma (+) combina cantidades y la resta (−) calcula la diferencia. Siempre alineamos los números por su valor posicional antes de operar.',
                list: ['Ejemplo: 37 + 45 = 82', 'Ejemplo: 90 − 34 = 56', 'Propiedad conmutativa: a + b = b + a']
            },
            {
                heading: '✖️ Multiplicación y División',
                text: 'La multiplicación es una suma repetida y la división es la operación inversa. Aprender las tablas de multiplicar es fundamental para resolver problemas rápidamente.',
                list: ['4 × 5 = 20 (cuatro grupos de cinco)', '20 ÷ 4 = 5', 'División exacta e inexacta']
            }
        ],
        videoId: '9R55R-gy28w',
        videoSearch: 'matematicas+primaria+sumas+restas',
        questions: [
            {
                id: 'mat1',
                text: '¿Cuánto es 7 + 5?',
                options: ['10', '12', '13', '11'],
                correct: 1,
                explanation: '7 + 5 = 12. ¡Excelente suma!'
            },
            {
                id: 'mat2',
                text: '¿Cuánto es 4 × 3?',
                options: ['10', '11', '12', '9'],
                correct: 2,
                explanation: '4 × 3 = 12. Cuatro grupos de tres unidades.'
            },
            {
                id: 'mat3',
                text: '¿Cuál es la mitad de 20?',
                options: ['8', '11', '10', '9'],
                correct: 2,
                explanation: '20 ÷ 2 = 10. La mitad es dividir entre dos.'
            }
        ],
        resources: [
            { icon: '📄', name: 'Tablas de Multiplicar', type: 'PDF', search: 'tablas+de+multiplicar+primaria+pdf' },
            { icon: '📊', name: 'Ejercicios de Suma y Resta', type: 'PDF', search: 'ejercicios+suma+resta+primaria' },
            { icon: '🎮', name: 'Juego de Números', type: 'Enlace', search: 'juego+matematicas+primaria+online' }
        ]
    },

    ciencias: {
        id: 'ciencias',
        title: 'Ciencias Naturales',
        icon: '🔬',
        color: '#16A085',
        subtitle: 'Plantas, animales, sistema solar y ciclo del agua',
        theory: [
            {
                heading: '🌱 El Reino Vegetal',
                text: 'Las plantas son seres vivos que producen su propio alimento a través de la fotosíntesis. Necesitan agua, luz solar y dióxido de carbono para crecer. Hay plantas con flores (angiospermas) y sin flores (gimnospermas).',
                list: ['Raíz: absorbe agua y nutrientes', 'Tallo: transporta nutrientes', 'Hojas: realizan la fotosíntesis', 'Flores: reproducción']
            },
            {
                heading: '💧 El Ciclo del Agua',
                text: 'El agua circula continuamente en la naturaleza en diferentes estados. Este ciclo es esencial para la vida en la Tierra.',
                list: ['Evaporación: el agua se convierte en vapor', 'Condensación: el vapor forma nubes', 'Precipitación: cae como lluvia o nieve', 'Infiltración: el agua penetra el suelo']
            },
            {
                heading: '🪐 El Sistema Solar',
                text: 'El Sistema Solar está formado por el Sol y los ocho planetas que orbitan a su alrededor, además de lunas, asteroides y cometas.',
                list: ['Mercurio, Venus, Tierra, Marte (planetas rocosos)', 'Júpiter, Saturno, Urano, Neptuno (planetas gaseosos)', 'La Tierra es el único planeta con vida conocida', 'El Sol es una estrella de tamaño mediano']
            }
        ],
        videoId: 'HKSUX7AVKR4',
        videoSearch: 'ciencias+naturales+primaria+ciclo+del+agua',
        questions: [
            {
                id: 'cie1',
                text: '¿Qué proceso permite a las plantas fabricar su propio alimento?',
                options: ['Respiración', 'Digestión', 'Fotosíntesis', 'Germinación'],
                correct: 2,
                explanation: '¡Correcto! La fotosíntesis transforma luz, agua y CO₂ en glucosa y oxígeno.'
            },
            {
                id: 'cie2',
                text: '¿Cuántos planetas tiene el Sistema Solar?',
                options: ['7', '9', '8', '10'],
                correct: 2,
                explanation: '¡Correcto! Desde 2006, el Sistema Solar tiene 8 planetas (Plutón es planeta enano).'
            },
            {
                id: 'cie3',
                text: '¿Cómo se llama el proceso en que el agua sube hacia las nubes?',
                options: ['Condensación', 'Precipitación', 'Evaporación', 'Infiltración'],
                correct: 2,
                explanation: '¡Muy bien! La evaporación convierte el agua líquida en vapor de agua.'
            }
        ],
        resources: [
            { icon: '📄', name: 'El Ciclo del Agua', type: 'PDF', search: 'ciclo+del+agua+primaria+pdf' },
            { icon: '🪐', name: 'Sistema Solar', type: 'PDF', search: 'sistema+solar+primaria+pdf' },
            { icon: '🌱', name: 'Las Plantas', type: 'PDF', search: 'plantas+partes+primaria+pdf' }
        ]
    },

    espanol: {
        id: 'espanol',
        title: 'Español',
        icon: '📖',
        color: '#D35400',
        subtitle: 'Lectura, escritura, gramática y ortografía',
        theory: [
            {
                heading: '📝 Gramática: Las Partes de la Oración',
                text: 'En español, las palabras se clasifican según su función en la oración. Conocer estas partes nos ayuda a construir oraciones correctas y expresar ideas con claridad.',
                list: ['Sustantivo: nombra personas, animales o cosas', 'Verbo: expresa acción o estado', 'Adjetivo: describe al sustantivo', 'Adverbio: modifica al verbo o adjetivo']
            },
            {
                heading: '🔤 Las Vocales y Consonantes',
                text: 'El español tiene 27 letras. Las 5 vocales (a, e, i, o, u) son los sonidos base del idioma. Las consonantes se combinan con las vocales para formar sílabas y palabras.',
                list: ['Vocales: a, e, i, o, u', 'Sílabas: agrupación de sonidos (ca-sa)', 'Hiato: dos vocales en sílabas distintas', 'Diptongo: dos vocales en la misma sílaba']
            },
            {
                heading: '✏️ Tipos de Texto',
                text: 'Existen diferentes tipos de texto según su propósito: informativo, narrativo, descriptivo, argumentativo y prescriptivo. Cada uno tiene características propias.',
                list: ['Narrativo: cuenta una historia (cuentos, novelas)', 'Descriptivo: detalla características de algo', 'Informativo: da datos concretos (noticias)', 'Instructivo: explica cómo hacer algo']
            }
        ],
        videoId: 'OAZc4WdMVVs',
        videoSearch: 'español+gramática+primaria+partes+oración',
        questions: [
            {
                id: 'esp1',
                text: '¿Qué es un sustantivo?',
                options: ['Una acción', 'El nombre de personas, animales o cosas', 'Una descripción', 'Una comparación'],
                correct: 1,
                explanation: '¡Exacto! El sustantivo es la palabra que nombra personas, animales, cosas o ideas.'
            },
            {
                id: 'esp2',
                text: '¿Cuántas vocales tiene el español?',
                options: ['4', '6', '5', '7'],
                correct: 2,
                explanation: '¡Muy bien! Las vocales son: a, e, i, o, u. ¡Solo 5!'
            },
            {
                id: 'esp3',
                text: '¿Cuál es el plural correcto de "niño"?',
                options: ['niñas', 'niños', 'niñoes', 'niñen'],
                correct: 1,
                explanation: '¡Correcto! El plural de "niño" es "niños", añadiendo la -s al final.'
            }
        ],
        resources: [
            { icon: '📄', name: 'Reglas de Ortografía', type: 'PDF', search: 'reglas+ortografía+primaria+pdf' },
            { icon: '📝', name: 'Ejercicios de Gramática', type: 'PDF', search: 'ejercicios+gramática+primaria' },
            { icon: '📚', name: 'Lecturas Infantiles', type: 'PDF', search: 'lecturas+comprensión+primaria+pdf' }
        ]
    },

    historia: {
        id: 'historia',
        title: 'Historia',
        icon: '🏛️',
        color: '#C0392B',
        subtitle: 'Civilizaciones antiguas, cultura e independencia',
        theory: [
            {
                heading: '🏛️ Las Grandes Civilizaciones',
                text: 'Las primeras civilizaciones aparecieron en zonas fértiles cerca de ríos. Estas civilizaciones desarrollaron escritura, arquitectura monumental y sistemas de gobierno complejos.',
                list: ['Mesopotamia: entre los ríos Tigris y Éufrates', 'Egipto: junto al río Nilo', 'Grecia: considerada cuna de la democracia', 'Roma: gran imperio del mundo antiguo']
            },
            {
                heading: '🦅 Civilizaciones Mesoamericanas',
                text: 'En América existieron civilizaciones avanzadas antes de la llegada de los españoles. Los aztecas (mexicas), mayas e incas construyeron grandes civilizaciones con arquitectura impresionante.',
                list: ['Aztecas: capital Tenochtitlán (hoy Ciudad de México)', 'Mayas: avanzados en astronomía y matemáticas', 'Incas: gran imperio en la cordillera andina', 'Pirámides y templos como legado cultural']
            },
            {
                heading: '🏴 La Independencia',
                text: 'A principios del siglo XIX, los países de América Latina iniciaron movimientos de independencia para liberarse del dominio colonial europeo.',
                list: ['1810: inicio del movimiento independentista en México', 'Miguel Hidalgo: "Padre de la Patria" en México', '1821: consumación de la Independencia de México', 'Simón Bolívar: libertador de América del Sur']
            }
        ],
        videoId: 'A9PY8YJnF1s',
        videoSearch: 'historia+primaria+civilizaciones+antiguas',
        questions: [
            {
                id: 'his1',
                text: '¿En qué año llegó Cristóbal Colón a América?',
                options: ['1392', '1592', '1492', '1292'],
                correct: 2,
                explanation: '¡Correcto! Cristóbal Colón llegó a América el 12 de octubre de 1492.'
            },
            {
                id: 'his2',
                text: '¿Qué civilización construyó pirámides junto al río Nilo?',
                options: ['Los griegos', 'Los romanos', 'Los egipcios', 'Los persas'],
                correct: 2,
                explanation: '¡Muy bien! Los egipcios construyeron las pirámides a orillas del río Nilo.'
            },
            {
                id: 'his3',
                text: '¿Cuál es la capital de México?',
                options: ['Guadalajara', 'Monterrey', 'Ciudad de México', 'Puebla'],
                correct: 2,
                explanation: '¡Exacto! La capital es Ciudad de México, antigua Tenochtitlán azteca.'
            }
        ],
        resources: [
            { icon: '📄', name: 'Civilizaciones Antiguas', type: 'PDF', search: 'civilizaciones+antiguas+primaria+pdf' },
            { icon: '🗺️', name: 'Mapas Históricos', type: 'PDF', search: 'mapas+históricos+primaria' },
            { icon: '🏛️', name: 'Independencia de México', type: 'PDF', search: 'independencia+mexico+primaria+pdf' }
        ]
    },

    'educacion-fisica': {
        id: 'educacion-fisica',
        title: 'Educación Física',
        icon: '🏃',
        color: '#1ABC9C',
        subtitle: 'Deportes, salud y hábitos de vida activa',
        theory: [
            {
                heading: '💪 Actividad Física y Salud',
                text: 'El ejercicio regular es esencial para mantener una vida sana. La OMS recomienda al menos 60 minutos de actividad física diaria para niños y adolescentes.',
                list: ['Mejora la salud cardiovascular', 'Fortalece músculos y huesos', 'Mejora el estado de ánimo', 'Ayuda a mantener el peso saludable']
            },
            {
                heading: '⚽ Los Deportes de Equipo',
                text: 'Los deportes en equipo no solo fortalecen el cuerpo, sino también desarrollan habilidades sociales como la cooperación, la comunicación y el trabajo en equipo.',
                list: ['Fútbol: el deporte más popular del mundo', 'Baloncesto: se juega con las manos en una canasta', 'Voleibol: se golpea el balón por encima de la red', 'Béisbol: se juega con bate y guante']
            },
            {
                heading: '🍎 Alimentación y Ejercicio',
                text: 'Una buena alimentación complementa el ejercicio físico. Es importante consumir frutas, verduras, proteínas y carbohidratos para tener energía y recuperarse bien.',
                list: ['Hidratación: beber agua antes, durante y después', 'Frutas y verduras: vitaminas y minerales', 'Proteínas: carnes, huevo, legumbres', 'Descanso: dormir 8-10 horas ayuda a recuperarse']
            }
        ],
        videoId: 'k3gkPTustuI',
        videoSearch: 'educacion+fisica+primaria+ejercicios+niños',
        questions: [
            {
                id: 'ef1',
                text: '¿Cuántos minutos de ejercicio diario se recomiendan para los niños?',
                options: ['30 minutos', '60 minutos', '120 minutos', '15 minutos'],
                correct: 1,
                explanation: '¡Correcto! La OMS recomienda al menos 60 minutos de actividad física diaria.'
            },
            {
                id: 'ef2',
                text: '¿Qué deporte se juega con raqueta y pelota pequeña?',
                options: ['Fútbol', 'Baloncesto', 'Tenis', 'Voleibol'],
                correct: 2,
                explanation: '¡Muy bien! El tenis se juega con raqueta y una pelota pequeña de goma.'
            },
            {
                id: 'ef3',
                text: '¿Qué órganos del cuerpo usamos principalmente para respirar?',
                options: ['El corazón', 'Los pulmones', 'Los riñones', 'El hígado'],
                correct: 1,
                explanation: '¡Exacto! Los pulmones son los órganos responsables de la respiración.'
            }
        ],
        resources: [
            { icon: '📄', name: 'Ejercicios en Casa', type: 'PDF', search: 'ejercicios+en+casa+niños+primaria' },
            { icon: '⚽', name: 'Reglas Deportivas', type: 'PDF', search: 'reglas+deportes+primaria+pdf' },
            { icon: '🥗', name: 'Alimentación Saludable', type: 'PDF', search: 'alimentación+saludable+niños+pdf' }
        ]
    }
};

const MODULE_ORDER = ['matematicas', 'ciencias', 'espanol', 'historia', 'educacion-fisica'];

const ACHIEVEMENTS = [
    { id: 'first_step',    icon: '👣', name: 'Primer Paso',       condition: p => p.totalPoints >= 1 },
    { id: 'math_star',     icon: '📐', name: 'Matemático',        condition: p => (p.moduleScores.matematicas || 0) >= 20 },
    { id: 'science_star',  icon: '🔬', name: 'Científico',        condition: p => (p.moduleScores.ciencias || 0) >= 20 },
    { id: 'spanish_star',  icon: '📖', name: 'Escritor',          condition: p => (p.moduleScores.espanol || 0) >= 20 },
    { id: 'history_star',  icon: '🏛️', name: 'Historiador',       condition: p => (p.moduleScores.historia || 0) >= 20 },
    { id: 'pe_star',       icon: '🏃', name: 'Deportista',        condition: p => (p.moduleScores['educacion-fisica'] || 0) >= 20 },
    { id: 'fifty_points',  icon: '🌟', name: '50 Puntos',         condition: p => p.totalPoints >= 50 },
    { id: 'hundred_pts',   icon: '💯', name: '100 Puntos',        condition: p => p.totalPoints >= 100 },
    { id: 'three_modules', icon: '📚', name: '3 Módulos',         condition: p => p.completedModules.length >= 3 },
    { id: 'all_modules',   icon: '🏆', name: 'Curso Completo',    condition: p => p.completedModules.length >= 5 }
];

/* ============================================================
   ESTADO DEL ESTUDIANTE (localStorage)
   ============================================================ */

const DEFAULT_PROFILE = {
    name: 'Estudiante',
    grade: '3° Primaria',
    avatar: '🎓',
    totalPoints: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    completedModules: [],
    moduleProgress: {},       // { moduleId: { answered: [qId,...], score: N } }
    moduleScores: {},         // { moduleId: total score }
    unlockedAchievements: [],
    streak: 0,
    lastActivity: null,
    selectedAvatar: '🎓'
};

let profile = {};
let currentModuleId = null;
let currentTab = 'teoria';
let selectedAvatarTemp = '🎓';

/* ─── Load / Save ─── */
function loadProfile() {
    try {
        const saved = localStorage.getItem('cursoProfile');
        profile = saved ? { ...DEFAULT_PROFILE, ...JSON.parse(saved) } : { ...DEFAULT_PROFILE };
    } catch {
        profile = { ...DEFAULT_PROFILE };
    }
    updateStreak();
}

function persistProfile() {
    try {
        localStorage.setItem('cursoProfile', JSON.stringify(profile));
    } catch {
        // Storage not available
    }
}

/* ─── Streak ─── */
function updateStreak() {
    const today = new Date().toDateString();
    if (!profile.lastActivity) {
        profile.streak = 1;
        profile.lastActivity = today;
    } else if (profile.lastActivity === today) {
        // same day, keep streak
    } else {
        const last = new Date(profile.lastActivity);
        const diff = (new Date(today) - last) / (1000 * 60 * 60 * 24);
        if (diff <= 1.5) {
            profile.streak = (profile.streak || 0) + 1;
        } else {
            profile.streak = 1;
        }
        profile.lastActivity = today;
    }
    persistProfile();
}

/* ============================================================
   LEVELS
   ============================================================ */
function getLevel(points) {
    if (points >= 200) return '🥇 Experto';
    if (points >= 100) return '🥈 Avanzado';
    if (points >= 50)  return '🥉 Intermedio';
    if (points >= 20)  return '🎖️ Aprendiz';
    return '🌱 Principiante';
}

/* ============================================================
   UI — DASHBOARD & PROFILE
   ============================================================ */
function updateDashboard() {
    // Stats cards
    setText('totalPoints', profile.totalPoints);
    setText('currentLevel', getLevel(profile.totalPoints));
    setText('streakDays', profile.streak + ' 🔥');
    setText('achievementsCount', profile.unlockedAchievements.length + ' / ' + ACHIEVEMENTS.length);

    // Global progress
    const totalQuestions = MODULE_ORDER.reduce((acc, id) => acc + MODULES_DATA[id].questions.length, 0);
    const answeredCorrect = profile.correctAnswers;
    const pct = Math.round((answeredCorrect / totalQuestions) * 100);
    setStyle('globalProgressBar', 'width', Math.min(pct, 100) + '%');
    setText('globalProgressText', Math.min(pct, 100) + '%');

    // Module progress mini
    buildModuleProgressGrid();

    // Module cards
    MODULE_ORDER.forEach(id => {
        const mp = profile.moduleProgress[id] || {};
        const answered = (mp.answered || []).length;
        const total = MODULES_DATA[id].questions.length;
        const fillPct = Math.round((answered / total) * 100);
        setStyle('fill-' + id, 'width', fillPct + '%');

        const statusEl = document.getElementById('status-' + id);
        if (statusEl) {
            if (answered === total) statusEl.textContent = '✅ Completado';
            else if (answered > 0) statusEl.textContent = '▶️ En progreso';
            else statusEl.textContent = '🔓 Disponible';
        }
    });

    // Profile
    setText('profileName', profile.name);
    setText('profileGrade', profile.grade);
    setHTML('profileAvatar', profile.avatar);
    setText('modulesCompleted', profile.completedModules.length + ' / 5');
    setText('correctAnswers', profile.correctAnswers);
    setText('wrongAnswers', profile.wrongAnswers);
    setText('profilePoints', profile.totalPoints);
    setText('profileStreak', profile.streak + ' días 🔥');

    buildAchievementsGrid();
}

function buildModuleProgressGrid() {
    const grid = document.getElementById('moduleProgressGrid');
    if (!grid) return;
    grid.innerHTML = '';
    MODULE_ORDER.forEach(id => {
        const mod = MODULES_DATA[id];
        const mp = profile.moduleProgress[id] || {};
        const answered = (mp.answered || []).length;
        const total = mod.questions.length;
        const pct = Math.round((answered / total) * 100);
        const div = document.createElement('div');
        div.className = 'module-progress-item';
        div.innerHTML = `
            <div class="mp-header">
                <span>${mod.icon} ${mod.title}</span>
                <span>${pct}%</span>
            </div>
            <div class="mp-bar">
                <div class="mp-fill" style="width:${pct}%;background:${mod.color}"></div>
            </div>`;
        grid.appendChild(div);
    });
}

function buildAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    ACHIEVEMENTS.forEach(a => {
        const unlocked = profile.unlockedAchievements.includes(a.id);
        const div = document.createElement('div');
        div.className = 'achievement-badge ' + (unlocked ? 'unlocked' : 'locked');
        div.title = unlocked ? a.name + ' — Desbloqueado' : a.name + ' — Bloqueado';
        div.innerHTML = `<span class="achievement-icon">${a.icon}</span><span class="achievement-name">${a.name}</span>`;
        grid.appendChild(div);
    });
}

/* ============================================================
   GAMIFICATION
   ============================================================ */
function addPoints(delta) {
    profile.totalPoints = Math.max(0, profile.totalPoints + delta);
    persistProfile();
    checkAchievements();
    updateDashboard();
    animatePoints(delta);
}

function animatePoints(delta) {
    const el = document.getElementById('totalPoints');
    if (!el) return;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 400);
}

function checkAchievements() {
    ACHIEVEMENTS.forEach(a => {
        if (!profile.unlockedAchievements.includes(a.id) && a.condition(profile)) {
            profile.unlockedAchievements.push(a.id);
            persistProfile();
            showAchievementToast(a);
            spawnConfetti();
        }
    });
}

function showAchievementToast(a) {
    showToast(`🏆 Logro desbloqueado: "${a.name}" ${a.icon}`);
}

/* ============================================================
   MODULE MODAL
   ============================================================ */
function openModule(moduleId) {
    currentModuleId = moduleId;
    const mod = MODULES_DATA[moduleId];
    if (!mod) return;

    const overlay = document.getElementById('moduleOverlay');
    const content = document.getElementById('modalContent');

    content.innerHTML = buildModuleHTML(mod);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchTab('teoria');
}

function buildModuleHTML(mod) {
    const mp = profile.moduleProgress[mod.id] || {};
    const answered = (mp.answered || []).length;
    const total = mod.questions.length;
    const pct = Math.round((answered / total) * 100);

    // Module header
    let html = `
        <div class="modal-module-header" style="border-left:5px solid ${mod.color}">
            <span class="modal-module-icon">${mod.icon}</span>
            <div>
                <h2 class="modal-module-title">${mod.title}</h2>
                <div class="modal-module-subtitle">${mod.subtitle}</div>
                <div class="modal-progress-bar-wrap">
                    <div class="modal-progress-bar-fill" style="width:${pct}%;background:${mod.color}"></div>
                </div>
            </div>
        </div>`;

    // Tabs
    html += `
        <div class="modal-tabs">
            <button class="tab-btn active" id="tab-teoria"   onclick="switchTab('teoria')">📖 Teoría</button>
            <button class="tab-btn"        id="tab-video"    onclick="switchTab('video')">🎥 Video</button>
            <button class="tab-btn"        id="tab-quiz"     onclick="switchTab('quiz')">✏️ Actividades</button>
            <button class="tab-btn"        id="tab-recursos" onclick="switchTab('recursos')">📥 Recursos</button>
        </div>`;

    // ─ TEORÍA ─
    html += `<div class="tab-content active" id="content-teoria">`;
    mod.theory.forEach(t => {
        const listHTML = t.list ? '<ul>' + t.list.map(i => `<li>${i}</li>`).join('') + '</ul>' : '';
        html += `
            <div class="theory-block">
                <h3>${t.heading}</h3>
                <p>${t.text}</p>
                ${listHTML}
            </div>`;
    });
    html += `</div>`;

    // ─ VIDEO ─
    html += `<div class="tab-content" id="content-video">
        <div class="video-wrapper">
            <iframe
                src="https://www.youtube.com/embed/${mod.videoId}?rel=0"
                title="Video educativo de ${mod.title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div style="text-align:center;margin-top:0.75rem;">
            <p style="color:#666;font-size:0.9rem;">¿El video no carga?
                <a href="https://www.youtube.com/results?search_query=${mod.videoSearch}"
                   target="_blank" rel="noopener" style="color:#2980B9;font-weight:700">
                   🔗 Buscar en YouTube
                </a>
            </p>
        </div>
    </div>`;

    // ─ QUIZ ─
    html += `<div class="tab-content" id="content-quiz">`;
    mod.questions.forEach((q, i) => {
        const mp2 = profile.moduleProgress[mod.id] || {};
        const answered = (mp2.answered || []).includes(q.id);
        const wasCorrect = (mp2.correctIds || []).includes(q.id);

        html += `<div class="quiz-block" id="quiz-block-${q.id}">
            <div class="quiz-question">${i + 1}. ${q.text}</div>`;

        if (!answered) {
            q.options.forEach((opt, idx) => {
                html += `<button class="btn-quiz" onclick="checkAnswer('${mod.id}','${q.id}',${idx === q.correct},'${q.id}-${idx}','${encodeURIComponent(q.explanation)}')">${opt}</button>`;
            });
        } else {
            q.options.forEach((opt, idx) => {
                let cls = '';
                if (idx === q.correct) cls = 'correct';
                html += `<button class="btn-quiz ${cls}" disabled>${opt}${idx === q.correct ? ' ✓' : ''}</button>`;
            });
            html += `<div class="quiz-answered ${wasCorrect ? 'correct' : 'wrong'}">
                ${wasCorrect ? '✅ ¡Correcto! +10 puntos' : '❌ Incorrecto. La respuesta era: ' + q.options[q.correct]}
                <br><em>${q.explanation}</em>
            </div>`;
        }
        html += `</div>`;
    });
    html += `</div>`;

    // ─ RECURSOS ─
    html += `<div class="tab-content" id="content-recursos"><div class="resources-grid">`;
    mod.resources.forEach(r => {
        html += `
            <div class="resource-card" onclick="window.open('https://www.google.com/search?q=${r.search}','_blank')">
                <div class="resource-icon">${r.icon}</div>
                <div class="resource-name">${r.name}</div>
                <div class="resource-type">${r.type}</div>
            </div>`;
    });
    html += `</div>
        <p style="color:#999;font-size:0.82rem;margin-top:1rem;text-align:center;">
            Los recursos abren una búsqueda en Google para encontrar materiales educativos gratuitos.
        </p>
    </div>`;

    // Nav buttons
    const currentIdx = MODULE_ORDER.indexOf(mod.id);
    const prevId = currentIdx > 0 ? MODULE_ORDER[currentIdx - 1] : null;
    const nextId = currentIdx < MODULE_ORDER.length - 1 ? MODULE_ORDER[currentIdx + 1] : null;
    html += `
        <div class="modal-nav-buttons">
            ${prevId ? `<button class="btn btn-outline" style="color:var(--color-primary);border-color:var(--color-primary)" onclick="openModule('${prevId}')">← ${MODULES_DATA[prevId].icon} ${MODULES_DATA[prevId].title}</button>` : '<span></span>'}
            ${nextId ? `<button class="btn btn-primary" onclick="openModule('${nextId}')">${MODULES_DATA[nextId].icon} ${MODULES_DATA[nextId].title} →</button>` : '<span></span>'}
        </div>`;

    return html;
}

function switchTab(tabName) {
    currentTab = tabName;
    ['teoria', 'video', 'quiz', 'recursos'].forEach(t => {
        const btn = document.getElementById('tab-' + t);
        const content = document.getElementById('content-' + t);
        if (btn) btn.classList.toggle('active', t === tabName);
        if (content) content.classList.toggle('active', t === tabName);
    });
}

function closeModule() {
    document.getElementById('moduleOverlay').classList.remove('active');
    document.body.style.overflow = '';
    updateDashboard();
}

function closeModuleOnOverlay(event) {
    if (event.target === document.getElementById('moduleOverlay')) closeModule();
}

/* ============================================================
   QUIZ LOGIC
   ============================================================ */
function checkAnswer(moduleId, questionId, isCorrect, btnKey, explanationEncoded) {
    const mod = MODULES_DATA[moduleId];
    const q = mod.questions.find(q => q.id === questionId);
    if (!q) return;

    // Init module progress
    if (!profile.moduleProgress[moduleId]) {
        profile.moduleProgress[moduleId] = { answered: [], correctIds: [], score: 0 };
    }
    const mp = profile.moduleProgress[moduleId];

    if (mp.answered.includes(questionId)) return; // already answered

    mp.answered.push(questionId);

    if (isCorrect) {
        mp.correctIds = mp.correctIds || [];
        mp.correctIds.push(questionId);
        mp.score = (mp.score || 0) + 10;
        profile.correctAnswers++;
        profile.moduleScores[moduleId] = (profile.moduleScores[moduleId] || 0) + 10;
        addPoints(10);
        showResult(true, q.explanation, '+10 puntos ⭐');
        spawnConfetti(25);
    } else {
        mp.score = Math.max(0, (mp.score || 0) - 5);
        profile.wrongAnswers++;
        addPoints(-5);
        showResult(false, 'Respuesta incorrecta. Respuesta correcta: ' + q.options[q.correct], '-5 puntos 😔');
    }

    // Check module completion
    if (mp.answered.length === mod.questions.length) {
        if (!profile.completedModules.includes(moduleId)) {
            profile.completedModules.push(moduleId);
            setTimeout(() => {
                showToast('🎉 ¡Módulo ' + mod.title + ' completado!');
                spawnConfetti(60);
            }, 1200);
        }
    }

    persistProfile();
    checkAchievements();

    // Re-render module content
    setTimeout(() => {
        const content = document.getElementById('modalContent');
        if (content) {
            content.innerHTML = buildModuleHTML(mod);
            switchTab('quiz');
        }
    }, 1500);
}

/* ============================================================
   RESULT MODAL
   ============================================================ */
function showResult(correct, message, subtitle) {
    const overlay = document.getElementById('resultOverlay');
    setText('resultIcon', correct ? '🎉' : '😔');
    setText('resultTitle', correct ? '¡Correcto!' : 'Sigue intentando');
    setHTML('resultMessage', `<strong>${message}</strong><br><span style="color:#999;font-size:0.9rem">${subtitle}</span>`);
    overlay.classList.add('active');
}

function closeResult() {
    document.getElementById('resultOverlay').classList.remove('active');
}

/* ============================================================
   PROFILE MODAL
   ============================================================ */
function editProfile() {
    const input = document.getElementById('nameInput');
    const grade = document.getElementById('gradeInput');
    if (input) input.value = profile.name === 'Estudiante' ? '' : profile.name;
    if (grade) grade.value = profile.grade;
    selectedAvatarTemp = profile.avatar;
    // Mark selected avatar
    document.querySelectorAll('.avatar-opt').forEach(el => {
        el.classList.toggle('selected', el.textContent === selectedAvatarTemp);
    });
    document.getElementById('profileOverlay').classList.add('active');
}

function selectAvatar(emoji) {
    selectedAvatarTemp = emoji;
    document.querySelectorAll('.avatar-opt').forEach(el => {
        el.classList.toggle('selected', el.textContent === emoji);
    });
}

function saveProfile() {
    const nameInput = document.getElementById('nameInput');
    const gradeInput = document.getElementById('gradeInput');
    if (nameInput && nameInput.value.trim()) {
        profile.name = nameInput.value.trim().substring(0, 40);
    }
    if (gradeInput) profile.grade = gradeInput.value;
    profile.avatar = selectedAvatarTemp;

    // Persist
    try { localStorage.setItem('cursoProfile', JSON.stringify(profile)); } catch {}
    updateDashboard();
    closeProfileModal();
    showToast('✅ Perfil guardado correctamente');
}

function closeProfileModal() {
    document.getElementById('profileOverlay').classList.remove('active');
}

/* ============================================================
   RESET
   ============================================================ */
function resetProgress() {
    if (!confirm('¿Seguro que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) return;
    const name = profile.name;
    const grade = profile.grade;
    const avatar = profile.avatar;
    profile = { ...DEFAULT_PROFILE, name, grade, avatar };
    try { localStorage.setItem('cursoProfile', JSON.stringify(profile)); } catch {}
    updateDashboard();
    showToast('🔄 Progreso reiniciado');
}

/* ============================================================
   CONFETTI
   ============================================================ */
function spawnConfetti(count = 40) {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#E74C3C','#F39C12','#27AE60','#2980B9','#8E44AD','#1ABC9C','#F1C40F'];
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.cssText = `
            left: ${Math.random() * 100}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            width: ${6 + Math.random() * 8}px;
            height: ${6 + Math.random() * 8}px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            animation-duration: ${1.5 + Math.random() * 2}s;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 3500);
    }
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu) menu.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu) menu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.style.background = window.scrollY > 50
        ? 'rgba(26,37,47,0.98)'
        : 'rgba(44,62,80,0.97)';
});

// Close modal with Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModule();
        closeResult();
        closeProfileModal();
    }
});

/* ============================================================
   UTILITY HELPERS
   ============================================================ */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}
function setStyle(id, prop, value) {
    const el = document.getElementById(id);
    if (el) el.style[prop] = value;
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    updateDashboard();

    // Add CSS for bump animation
    const style = document.createElement('style');
    style.textContent = `.bump { animation: bump 0.4s ease; }
    @keyframes bump { 0%,100% { transform:scale(1); } 50% { transform:scale(1.3); color:#E74C3C; } }`;
    document.head.appendChild(style);

    // Welcome toast on first visit
    if (!localStorage.getItem('cursoVisited')) {
        setTimeout(() => showToast('👋 ¡Bienvenido al Curso de Primaria! Selecciona un módulo para empezar.'), 1200);
        localStorage.setItem('cursoVisited', '1');
    }
});
