// eslint.config.mjs
// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        // You might need to specify your project's tsconfig path if it's not the default
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    rules: {
      // Add your specific rules here
      "no-unused-vars": "warn",
      "prefer-const": "error",
      // ... other rules
    },
  },
  {
    // Ignore output directories and node_modules
    ignores: ["dist/**", "node_modules/**"],
  },
);
