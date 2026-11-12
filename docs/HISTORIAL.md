# Historial del proyecto

> **Para la IA:** lee primero la sección **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualización:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atómico (`docs(historial): registra <cambio>`). Si el cambio no está aquí, para la IA no existe.

---

## 1. Estado actual

_Máximo ~15 líneas. Se reescribe en cada actualización, no se acumula._

- **Proyecto:** landing (veterinaria) — Landing page de una veterinaria
- **Repositorio:** https://github.com/JCarvajalLab/astro-landing-veterinaria
- **Última actualización:** 2026-11-11
- **Fase activa:** `phase/04-contact`
- **Rama de trabajo:** `phase/04-contact`
- **Último commit relevante:** `chore(security): aplica limites de longitud y atributos aria-invalid en formulario`
- **Despliegue:** pendiente de vincular al servicio de hosting gratuito (Cloudflare Pages / Netlify)
- **Qué funciona:** Formulario de contacto y agendamiento interactivo en `ContactForm.astro`, validaciones accesibles en JS nativo, honeypot antispam, vías directas (WhatsApp, teléfono de urgencias), auditoría de seguridad aprobada por subagente independiente, y servidor de desarrollo activo.
- **Qué está en progreso:** Revisión de la vista previa del formulario por parte del usuario previo a push a GitHub.
- **Bloqueos o problemas conocidos:** ninguno.
- **Siguiente paso concreto:** Validar la vista previa local con el usuario y proceder con la Fase 5 (Calidad, SEO, accesibilidad, meta tags y soporte para Modo Nocturno).

## 2. Decisiones importantes

_Una línea por decisión. Evita que la IA proponga de nuevo algo ya descartado._

| Fecha | Decisión | Motivo | Alternativas descartadas |
|-------|----------|--------|--------------------------|
| 2026-11-11 | Usar Astro 5+ con JavaScript y Tailwind CSS v4 | Sitios rápidos, costo cero de despliegue y menor complejidad sin TypeScript ni frameworks extra | React/Next.js, Vue/Nuxt, Django |
| 2026-11-11 | Adaptar especialistas a `.agents/skills/*/SKILL.md` | Descubrimiento automático y carga bajo demanda (Progressive Disclosure) en Gemini / Antigravity | Archivos planos sin autodescubrimiento |
| 2026-11-11 | Fijar ESLint v9 LTS con flat config y plugins oficiales | Garantiza estabilidad, 0 vulnerabilidades en audit y soporte de linting para componentes `.astro` | ESLint v10-alpha |
| 2026-11-11 | Generar preview local interactivo antes de consolidar cambios | Permite revisión visual y feedback temprano del usuario antes de commits/push | Avanzar sin feedback visual previo |
| 2026-11-11 | Menú móvil accesible con JavaScript nativo sin dependencias | Cero sobrecarga de bundle, control de `aria-expanded` y cierre con tecla Escape | Librerías pesadas o frameworks de UI |
| 2026-11-11 | Incorporar soporte de modo nocturno (Dark Mode) en Fase 5 | Requerimiento de usuario para mejorar accesibilidad y experiencia visual | No contemplar modo nocturno |
| 2026-11-11 | Usar `<details>` y `<summary>` nativos para sección FAQ | Máxima accesibilidad WCAG y cero JavaScript de cliente para interacción | Acordeones pesados basados en JS/React |
| 2026-11-11 | Protección antispam silenciosa con honeypot | Bloquea bots sin fricción para el usuario tutor evitando CAPTCHAs invasivos | ReCaptcha / hCaptcha |
| 2026-11-11 | Auditoría cruzada de seguridad con subagente independiente | Verificación neutral de XSS, secretos, honeypot y dependencias antes de proponer push | Omitir revisión de seguridad |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-11 · `phase/04-contact` · fase 4 completada
- **Qué:** Implementación del componente `ContactForm.astro` con agendamiento médico, canales directos (WhatsApp, urgencias), validación accesible (`aria-invalid`), protección antispam por honeypot y auditoría de seguridad aprobada.
- **Archivos clave:** `src/components/ContactForm.astro`, `src/pages/index.astro`, `docs/PLAN.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, desarrollo, seguridad (subagente independiente), qa, docs-seo
- **Notas:** Auditoría de seguridad aprobada con 0 vulnerabilidades.

### 2026-11-11 · `phase/03-sections` · fase 3 completada
- **Qué:** Implementación completa de componentes modulares para todas las secciones: Hero, Services, Team con fotos optimizadas, Testimonials con carrusel interactivo de 6 tutores, Schedule con diseño asimétrico y Faq.
- **Archivos clave:** `src/components/*.astro`, `src/assets/team/*`, `src/assets/testimonials/*`, `src/pages/index.astro`
- **Agente(s):** orquestador, desarrollo, ux-ui, qa, docs-seo
- **Notas:** Se incorporaron fotos reales optimizadas con `astro:assets` a WebP ligero (< 7kB) y carrusel accesible con scroll-snap.

### 2026-11-11 · `phase/02-layout` · fase 2 completada
- **Qué:** Implementación del sistema de diseño base, Navbar sticky responsive con menú móvil nativo, Footer clínico con horarios y contacto, skip-link de accesibilidad e integración en Layout.
- **Archivos clave:** `src/styles/global.css`, `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro`
- **Agente(s):** orquestador, ux-ui, desarrollo, qa, docs-seo
- **Notas:** Verificado en servidor de desarrollo local y listo para inspección visual del usuario.

### 2026-11-11 · `phase/01-setup` · fase 1 completada
- **Qué:** Inicialización de proyecto Astro 5+, Tailwind CSS v4 (@tailwindcss/vite), ESLint v9, Prettier con plugins de Astro y Tailwind, scripts de calidad y estructura de carpetas.
- **Archivos clave:** `package.json`, `astro.config.mjs`, `eslint.config.mjs`, `.prettierrc.mjs`, `.prettierignore`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `README.md`
- **Agente(s):** orquestador, desarrollo, qa, docs-seo
- **Notas:** Todos los chequeos de calidad (`lint`, `format:check`, `build`, `test`, `audit`) pasan al 100% con 0 vulnerabilidades.

<!-- Copiar el bloque anterior para cada nueva entrada, encima de las existentes. -->

## 4. Mapa del código

_Dónde está cada cosa. Se actualiza solo cuando cambia la estructura._

| Ruta | Qué contiene |
|------|--------------|
| `src/pages/` | Rutas del sitio (`index.astro`, etc.) |
| `src/components/` | Componentes (`Navbar`, `Footer`, `Hero`, `Services`, `Team`, `Testimonials`, `Schedule`, `Faq`, `ContactForm`) |
| `src/layouts/` | Layouts base (`Layout.astro`) |
| `src/assets/` | Imágenes descargadas localmente y optimizadas con `astro:assets` |
| `src/styles/` | Estilos globales y Tailwind CSS v4 (`global.css`) |
| `src/content.config.js` | Configuración de Content Collections (Astro 5+) |
| `src/content/` | Datos y contenido de las colecciones |
| `public/` | Archivos públicos estáticos (`favicon.svg`) |
| `.agents/skills/` | Skills de especialistas para Gemini |
| `docs/PLAN.md` | Plan general y checklist de fases |
| `docs/HISTORIAL.md` | Memoria del proyecto para la IA |
| `AGENTS.md` | Instrucciones del orquestador |
