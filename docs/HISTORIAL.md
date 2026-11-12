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
- **Último commit relevante:** `refactor(navigation): enlaza llamadas a la accion a la nueva ruta /agendar`
- **Despliegue:** pendiente de vincular al servicio de hosting gratuito (Cloudflare Pages / Netlify)
- **Qué funciona:** Sección de contacto y ubicación de ancho completo en la landing (`Contact.astro`), portal dedicado moderno de agendamiento por pasos en `/agendar` (`agendar.astro`) con Stepper, selección de especialidad, médicos con fotos y pastillas horarias interactivas, formulario de paciente con honeypot antispam y comprobante descargable.
- **Qué está en progreso:** Revisión interactiva de la nueva experiencia de agendamiento en `/agendar` por parte del usuario.
- **Bloqueos o problemas conocidos:** ninguno.
- **Siguiente paso concreto:** Validar la vista previa del portal `/agendar` con el usuario y proceder al cierre de fase hacia `phase/05-launch`.

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
| 2026-11-11 | Separar contacto general de agendamiento en ruta dedicada `/agendar` | Mayor claridad de UX, evita sobrecargar la landing y replica el flujo real de portales clínicos modernos | Formulario largo incrustado en el pie de página |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-11 · `phase/04-contact` · fase 4 completada y rediseñada
- **Qué:** Desacoplamiento de contacto y agendamiento: `Contact.astro` para atención y canales directos en inicio, creación de ruta dedicada `/agendar` con Stepper moderno de 4 pasos (Especialidad, Médico con horarios, Identificación y Comprobante) y actualización de enlaces CTA.
- **Archivos clave:** `src/components/Contact.astro`, `src/pages/agendar.astro`, `src/components/Navbar.astro`, `src/components/Hero.astro`, `src/components/Services.astro`, `src/components/Schedule.astro`, `src/components/Footer.astro`, `docs/PLAN.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, seguridad, qa, docs-seo
- **Notas:** Se reemplazó el formulario clásico monolítico por un portal interactivo fluido en JavaScript nativo.

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
| `src/pages/` | Rutas del sitio: `index.astro` (landing principal) y `agendar.astro` (portal de reserva de horas) |
| `src/components/` | Componentes (`Navbar`, `Footer`, `Hero`, `Services`, `Team`, `Testimonials`, `Schedule`, `Faq`, `Contact`) |
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
