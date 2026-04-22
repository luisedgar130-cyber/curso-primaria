# 🎓 Curso Primaria — Plataforma Educativa Interactiva

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Una plataforma educativa moderna, dinámica e interactiva diseñada para estudiantes de primaria (6–12 años). Ofrece módulos de aprendizaje, quizzes, sistema de puntos, logros y calendario escolar — todo sin necesidad de servidor ni frameworks.

---

## 📸 Vista Previa

> Abre `index.html` en tu navegador para ver la plataforma en acción.

---

## ✨ Características

- 🚀 **Pantalla de carga animada** con spinner
- 🧭 **Navegación fija** con efecto glassmorphism y menú hamburguesa para móvil
- 🌟 **Hero Section** con animación typewriter y íconos flotantes
- 📊 **Barra de progreso general** del curso
- 📈 **Estadísticas en tiempo real**: puntos, módulos, actividades y medallas
- 📚 **5 Módulos educativos** con lecciones, videos y quizzes
- 🎯 **Sistema de quizzes** interactivos con retroalimentación inmediata
- 🏆 **8 Logros desbloqueables** según el progreso del alumno
- 📅 **Calendario escolar** con navegación mensual
- 👤 **Perfil personalizable** con avatares y datos del estudiante
- 📬 **Formulario de contacto** con validación
- 💾 **Persistencia de datos** con localStorage + sincronización en Neon Postgres
- 📱 **Totalmente responsive**: móvil, tablet y escritorio

---

## 📦 Módulos Educativos

| Módulo | Ícono | Dificultad | Lecciones |
|--------|-------|-----------|-----------|
| Matemáticas | 🔢 | ⭐⭐⭐ | 4 |
| Ciencias Naturales | 🔬 | ⭐⭐ | 4 |
| Español | 📖 | ⭐⭐ | 4 |
| Historia | 🏛️ | ⭐⭐⭐ | 4 |
| Educación Física | 🏃 | ⭐ | 4 |

Cada módulo incluye:
- Descripción y lecciones con contenido educativo
- Video educativo embebido de YouTube
- Quiz rápido de 5 preguntas con respuestas A/B/C/D
- Sistema de puntuación proporcional al resultado

---

## 🚀 Cómo Ejecutar Localmente

### Sin backend (solo localStorage)

No se requieren herramientas de construcción, npm, ni servidores especiales.

```bash
# 1. Clona el repositorio
git clone https://github.com/luisedgar130-cyber/curso-primaria.git

# 2. Entra al directorio
cd curso-primaria

# 3. Abre el archivo principal en tu navegador
# En macOS:
open index.html

# En Linux:
xdg-open index.html

# En Windows:
start index.html
```

O también puedes usar cualquier extensión de servidor local como:
- **VS Code Live Server** (extensión de Visual Studio Code)
- `python3 -m http.server 8080` y abrir `http://localhost:8080`

### Con backend Neon Postgres (Vercel Functions)

Para probar la integración con la base de datos localmente, necesitas la [Vercel CLI](https://vercel.com/docs/cli):

```bash
# 1. Instala dependencias
npm install

# 2. Instala la CLI de Vercel (si no la tienes)
npm install -g vercel

# 3. Crea un archivo .env.local con tu DATABASE_URL de Neon
echo "DATABASE_URL=postgresql://usuario:password@host/db?sslmode=require" > .env.local

# 4. Ejecuta el servidor de desarrollo (sirve el static + las funciones de api/)
vercel dev
```

Luego abre `http://localhost:3000` en tu navegador.

> **Nota:** Si no hay `DATABASE_URL` configurada o el endpoint falla, la aplicación
> sigue funcionando normalmente con `localStorage`. La sincronización con el servidor
> es opcional y transparente para el usuario.

---

## 🗄️ Configuración de Neon Postgres

### 1. Crear el proyecto en Neon

1. Entra a [neon.tech](https://neon.tech) y crea una cuenta (o inicia sesión).
2. Haz clic en **New Project**.
3. Elige un nombre (p. ej. `curso-primaria`) y una región cercana.
4. Copia el **Connection String** (formato `postgresql://...`). Lo necesitarás como `DATABASE_URL`.

### 2. Crear las tablas (SQL)

Abre el **SQL Editor** de Neon y ejecuta:

```sql
-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Tabla de estudiantes (un registro por ID único de dispositivo)
CREATE TABLE IF NOT EXISTS students (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  username   TEXT        UNIQUE NOT NULL,   -- studentId generado en localStorage
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Estado del estudiante guardado como JSONB
CREATE TABLE IF NOT EXISTS student_state (
  student_id UUID        PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
  state      JSONB       NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### 3. Configurar `DATABASE_URL` en Vercel

1. Abre tu proyecto en [vercel.com](https://vercel.com).
2. Ve a **Settings → Environment Variables**.
3. Agrega una nueva variable:
   - **Key:** `DATABASE_URL`
   - **Value:** el Connection String de Neon (p. ej. `postgresql://user:pass@host/db?sslmode=require`)
   - Marca los entornos **Production** y **Preview**.
4. Haz un nuevo deploy (o fuerza un redeploy) para que la variable surta efecto.

---

## 🔌 API Endpoints

La aplicación expone un único endpoint serverless:

### `GET /api/state`

Devuelve el último estado guardado para el estudiante identificado por el header `x-user`.

**Headers requeridos:**
- `x-user`: el `studentId` único almacenado en `localStorage` (clave `cursoPrimaria_studentId`).

**Respuesta exitosa:**
```json
{ "state": { ... }, "updated_at": "2024-01-01T00:00:00.000Z" }
```

Si no hay estado guardado aún:
```json
{ "state": null }
```

---

### `POST /api/state`

Guarda (upsert) el estado del estudiante en la base de datos.

**Headers requeridos:**
- `Content-Type: application/json`
- `x-user`: el `studentId`.

**Body:**
```json
{
  "state": {
    "studentName": "Luis",
    "points": 150,
    "modulesVisited": ["matematicas", "ciencias"],
    "subjectsQuizzed": ["matematicas"],
    ...
  }
}
```

**Respuesta exitosa:**
```json
{ "ok": true }
```

---

## 📁 Estructura del Proyecto

```
curso-primaria/
├── api/
│   └── state.js        # Vercel Serverless Function (GET/POST del estado)
├── index.html          # Estructura HTML completa de la aplicación
├── styles.css          # Estilos CSS con variables, animaciones y responsive
├── script.js           # Lógica JavaScript con módulos, quizzes y estado
├── package.json        # Dependencias Node (para Vercel Functions)
└── README.md           # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Variables CSS, Grid, Flexbox, animaciones, glassmorphism |
| **JavaScript ES6+** | Lógica, localStorage, DOM, IntersectionObserver |
| **@neondatabase/serverless** | Driver Postgres para Vercel Serverless Functions |
| **Neon Postgres** | Base de datos serverless para persistencia del estado |
| **Google Fonts (Nunito)** | Tipografía amigable para niños |
| **Font Awesome 6** | Íconos vectoriales |
| **YouTube Embed API** | Videos educativos |

No se usa ningún framework de frontend (sin Bootstrap, sin jQuery, sin React). 100% vanilla.

---

## 🎮 Sistema de Puntos y Logros

### Puntos
| Acción | Puntos |
|--------|--------|
| Abrir una lección | +10 pts |
| Completar un quiz (puntuación parcial) | +10–100 pts |
| Guardar perfil | +5 pts |
| Enviar formulario de contacto | +5 pts |

### Logros
| Logro | Condición |
|-------|-----------|
| 🎯 Primer Quiz | Completar 1 quiz |
| ⭐ Puntuación Perfecta | Obtener 5/5 en un quiz |
| 📚 Ratón de Biblioteca | Abrir 3 lecciones |
| 🌍 Explorador | Visitar los 5 módulos |
| 💯 100 Puntos | Acumular 100 puntos |
| 🏆 500 Puntos | Acumular 500 puntos |
| 🧠 Quiz Master | Completar quizzes de 3 materias |
| 🥇 Campeón Escolar | Completar todos los módulos |

---

## 🎨 Paleta de Colores

```css
--primary-blue:   #4A90E2  /* Matemáticas, navegación */
--primary-green:  #27AE60  /* Ciencias, éxito */
--primary-orange: #F39C12  /* Español, advertencia */
--primary-purple: #8E44AD  /* Historia, premium */
--primary-red:    #E74C3C  /* Ed. Física, error */
--dark:           #2C3E50  /* Texto principal */
--light:          #ECF0F1  /* Fondos claros */
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Agrega nueva funcionalidad'`
4. Sube tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

### Ideas para contribuir
- Agregar más preguntas a los quizzes
- Nuevos módulos (Arte, Música, Tecnología)
- Modo oscuro
- Accesibilidad mejorada (ARIA, lectores de pantalla)
- Internacionalización (i18n)
- Modo de juego con temporizador

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

---

<p align="center">Hecho con ❤️ para los estudiantes de primaria 🎒📚✏️</p>