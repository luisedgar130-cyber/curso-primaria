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
- 💾 **Persistencia de datos** con localStorage
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

---

## 📁 Estructura del Proyecto

```
curso-primaria/
├── index.html      # Estructura HTML completa de la aplicación
├── styles.css      # Estilos CSS (~700 líneas) con variables, animaciones y responsive
├── script.js       # Lógica JavaScript (~500 líneas) con módulos, quizzes y estado
└── README.md       # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Variables CSS, Grid, Flexbox, animaciones, glassmorphism |
| **JavaScript ES6+** | Lógica, localStorage, DOM, IntersectionObserver |
| **Google Fonts (Nunito)** | Tipografía amigable para niños |
| **Font Awesome 6** | Íconos vectoriales |
| **YouTube Embed API** | Videos educativos |

No se usa ningún framework (sin Bootstrap, sin jQuery, sin React). 100% vanilla.

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