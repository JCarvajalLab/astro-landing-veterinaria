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
- **Fase activa:** `phase/01-setup`
- **Rama de trabajo:** `phase/01-setup`
- **Último commit relevante:** `chore(structure): establece estructura de carpetas y documentacion base`
- **Despliegue:** pendiente de vincular al servicio de hosting gratuito (Cloudflare Pages / Netlify)
- **Qué funciona:** Astro 5+ con JavaScript, Tailwind CSS v4 (`@tailwindcss/vite`), ESLint v9, Prettier (plugins Astro + Tailwind), `README.md`, estructura de carpetas y suite de verificación local (`lint`, `format:check`, `build`, `test`, `audit` en 0 vulnerabilidades).
- **Qué está en progreso:** Cierre de Fase 1 y preparación de PR hacia `develop`.
- **Bloqueos o problemas conocidos:** ninguno.
- **Siguiente paso concreto:** Validar primer despliegue y proceder con la Fase 2 (Layout y componentes).

## 2. Decisiones importantes

_Una línea por decisión. Evita que la IA proponga de nuevo algo ya descartado._

| Fecha | Decisión | Motivo | Alternativas descartadas |
|-------|----------|--------|--------------------------|
| 2026-11-11 | Usar Astro 5+ con JavaScript y Tailwind CSS v4 | Sitios rápidos, costo cero de despliegue y menor complejidad sin TypeScript ni frameworks extra | React/Next.js, Vue/Nuxt, Django |
| 2026-11-11 | Adaptar especialistas a `.agents/skills/*/SKILL.md` | Descubrimiento automático y carga bajo demanda (Progressive Disclosure) en Gemini / Antigravity | Archivos planos sin autodescubrimiento |
| 2026-11-11 | Fijar ESLint v9 LTS con flat config y plugins oficiales | Garantiza estabilidad, 0 vulnerabilidades en audit y soporte de linting para componentes `.astro` | ESLint v10-alpha |
| 2026-11-11 | Generar preview local interactivo antes de consolidar cambios | Permite revisión visual y feedback temprano del usuario antes de commits/push | Avanzar sin feedback visual previo |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-11 · `phase/01-setup` · fase 1 completada
- **Qué:** Inicialización de proyecto Astro 5+, Tailwind CSS v4 (@tailwindcss/vite), ESLint v9, Prettier con plugins de Astro y Tailwind, scripts de calidad y estructura de carpetas.
- **Archivos clave:** `package.json`, `astro.config.mjs`, `eslint.config.mjs`, `.prettierrc.mjs`, `.prettierignore`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `README.md`
- **Agente(s):** orquestador, desarrollo, qa, docs-seo
- **Notas:** Todos los chequeos de calidad (`lint`, `format:check`, `build`, `test`, `audit`) pasan al 100% con 0 vulnerabilidades.

### 2026-11-11 · `phase/01-setup` · inicial
- **Qué:** Configura plantilla base optimizada para Gemini con `AGENTS.md` y 6 skills en `.agents/skills/`
- **Archivos clave:** `AGENTS.md`, `.agents/skills/*/SKILL.md`, `docs/PLAN.md`, `docs/HISTORIAL.md`, `.github/workflows/ci.yml`
- **Agente(s):** orquestador, docs-seo
- **Notas:** El proyecto está listo para inicializar Astro sin perder los archivos de configuración.

<!-- Copiar el bloque anterior para cada nueva entrada, encima de las existentes. -->

## 4. Mapa del código

_Dónde está cada cosa. Se actualiza solo cuando cambia la estructura._

| Ruta | Qué contiene |
|------|--------------|
| `src/pages/` | Rutas del sitio (`index.astro`, etc.) |
| `src/components/` | Componentes reutilizables `.astro` |
| `src/layouts/` | Layouts base (`Layout.astro`) |
| `src/assets/` | Imágenes descargadas localmente y optimizadas con `astro:assets` |
| `src/styles/` | Estilos globales y configuración Tailwind CSS v4 (`global.css`) |
| `src/content.config.js` | Configuración de Content Collections (Astro 5+) |
| `src/content/` | Datos y contenido de las colecciones (Markdown/MDX/JSON) |
| `public/` | Archivos públicos estáticos (`favicon.svg`) |
| `.agents/skills/` | Skills de especialistas para Gemini (`desarrollo`, `ux-ui`, `backend`, `seguridad`, `qa`, `docs-seo`) |
| `docs/PLAN.md` | Plan general y checklist de fases |
| `docs/HISTORIAL.md` | Memoria del proyecto para la IA |
| `AGENTS.md` | Instrucciones del orquestador |
