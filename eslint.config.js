import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";

export default [
  // Global ignores
  {
    ignores: ["dist/", "node_modules/", ".astro/", "db/migrations/"],
  },

  // Base JavaScript/TypeScript recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Global settings for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Allow unused variables prefixed with _ (common convention for intentional skips)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Keep spacing and punctuation consistent without requiring a separate formatter.
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "computed-property-spacing": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
  },

  // Astro files
  ...eslintPluginAstro.configs.recommended,

  // TypeScript-specific overrides
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
