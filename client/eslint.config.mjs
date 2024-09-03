import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import pluginImport from 'eslint-plugin-import'
import pluginReact from "eslint-plugin-react";
import pluginFsd from '@conarti/eslint-plugin-feature-sliced';
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {files: ["**/*.{ts,tsx}"]},
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: pluginImport,
      "@conarti/feature-sliced": pluginFsd,
      prettier: prettierPlugin,

    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true }
        },
      ],
      "@conarti/feature-sliced/layers-slices": "error",
      "@conarti/feature-sliced/absolute-relative": "error",
      "@conarti/feature-sliced/public-api": "error",

      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',

      // 'import/no-named-as-default': 'warn',
      // 'import/no-named-as-default-member': 'warn',
      'import/no-duplicates': 'warn',
      "react/react-in-jsx-scope": "off",

      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
];