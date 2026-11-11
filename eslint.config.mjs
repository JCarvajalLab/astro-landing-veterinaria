import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Reglas adicionales del proyecto
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];
