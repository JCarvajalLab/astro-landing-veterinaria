# Astro Landing Veterinaria 🐾

Landing page moderna y accesible para una clínica veterinaria, desarrollada con **Astro 5+**, **JavaScript** y **Tailwind CSS v4**.

## 🚀 Requisitos

- **Node.js**: v22+ (LTS recomendada)
- **npm**: v10+

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview
```

## 🛠️ Calidad de Código y Pruebas

```bash
# Lintear código con ESLint
npm run lint

# Verificar formato con Prettier
npm run format:check

# Corregir formato automáticamente
npm run format

# Ejecutar pruebas
npm test
```

## 📂 Estructura del Proyecto

```text
├── .agents/skills/       # Especialistas y guías de Antigravity / Gemini
├── docs/                 # Documentación, PLAN.md e HISTORIAL.md
├── public/               # Archivos estáticos públicos (favicon, etc.)
├── src/
│   ├── assets/           # Imágenes locales optimizadas con astro:assets
│   ├── components/       # Componentes reutilizables (.astro)
│   ├── content/          # Content Collections
│   ├── layouts/          # Layouts base
│   ├── pages/            # Rutas y páginas del sitio
│   └── styles/           # Estilos globales con Tailwind CSS v4
├── AGENTS.md             # Reglas operativas y orquestación
└── astro.config.mjs      # Configuración de Astro y Vite
```
