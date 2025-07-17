// eslint.config.js
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ JSX transform
      "react/prop-types": "off", // Optional, if you use TypeScript or don't need PropTypes
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": "error", // show Prettier issues as ESLint errors
      "no-unused-vars": "warn",
      "react/no-unknown-property": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  configPrettier,
]);
