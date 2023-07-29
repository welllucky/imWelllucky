const eslintConfig = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
    BodyInit: true,
    RequestInfo: true,
    RequestInit: true,
  },
  settings: {
    next: {
      rootDir: "apps/*/",
    },
    react: {
      version: "detect",
      // version: "latest",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "next",
    "turbo",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": ["warn", "apps/**/pages"],
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "no-nested-ternary": "off",
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx"],
      },
    ],
  },
};

module.exports = eslintConfig;
