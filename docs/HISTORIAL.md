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
- **Último commit relevante:** `feat(booking): filtra profesionales por servicio, bloquea domingos y restringe especies exclusivas`
- **Despliegue:** servidor local de desarrollo activo en `http://localhost:4321/`
- **Qué funciona:** Filtrado dinámico de profesionales por servicio (Peluquería solo Rodrigo Lagos, Felina solo Dr. Carlos, etc.), bloqueo estricto e inmutable de especie en servicios exclusivos (Peluquería = Perro, Felina = Gato) impidiendo que se cambien a conejos u otras mascotas, calendario con bloqueo activo de días pasados y rechazo automático de domingos (reubicación inmediata en lunes hábil con aviso clínico), validación estricta de profesional/horario y comprobante médico con QR e impresión aislada.
- **Qué está en progreso:** Validación de los nuevos filtros clínicos y reglas de agendamiento por parte del usuario.
- **Bloqueos o problemas conocidos:** ninguno.
- **Siguiente paso concreto:** Confirmar aprobación final del usuario para cerrar la Fase 4 y proceder con el merge hacia `develop`.

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
| 2026-11-11 | Impresión aislada con `@media print` y QR vectorial SVG | El comprobante imprime únicamente la ficha clínica oficial sin headers ni footers y sin dependencias externas pesadas | Captura completa del sitio o librerías pesadas de PDF |
| 2026-11-11 | Sincronización y bloqueo estricto de especie según el servicio | En Peluquería Canina solo permite Perro y en Felina solo Gato; evita reservas absurdas como conejos en peluquería canina | Permitir que el usuario elija cualquier especie |
| 2026-11-11 | Filtrar profesionales por especialidad en vez de bloquearlos | Experiencia limpia y enfocada: en Peluquería solo aparece el peluquero, en Cirugía solo la cirujana, etc. | Mostrar los 4 médicos con 3 deshabilitados |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-11 · `phase/04-contact` · filtrado de especialistas, rechazo de domingos y bloqueo estricto de especie
- **Qué:** Filtrado reactivo de profesionales en Paso 2 según la especialidad seleccionada (Peluquería Canina muestra únicamente a Rodrigo Lagos; Medicina Felina únicamente a Dr. Carlos; Cirugía a Dra. Valentina; etc.); bloqueo estricto del selector de especie (inmutable en servicios exclusivos de perro o gato con candado e indicador visual); y detección y sanitización automática de domingos en el calendario trasladando la cita al lunes hábil más próximo con alerta de guardia.
- **Archivos clave:** `src/pages/agendar.astro`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, qa, docs-seo
- **Notas:** Validado con 0 errores de compilación (`npm run build`), ESLint y Prettier.

### 2026-11-11 · `phase/04-contact` · refinamiento ux/ui y validaciones avanzadas de agendamiento
- **Qué:** Navbar adaptada con rutas absolutas para funcionar desde cualquier subpágina; sincronización de especie en paso 3 según especialidad seleccionada; selector de fecha con bloqueo estricto de días pasados y domingos; validación obligatoria de hora y profesional antes de avanzar; código QR vectorial interactivo e impresión con `@media print` focalizada exclusivamente en la ficha del comprobante.
- **Archivos clave:** `src/pages/agendar.astro`, `src/components/Navbar.astro`, `src/components/Contact.astro`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, qa, docs-seo
- **Notas:** Se resolvió cada punto del feedback del usuario manteniendo cero dependencias externas y JS nativo reactivo.

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
