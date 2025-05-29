module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }, 
  plugins: ["react", "react-refresh", "import"],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"],
        "paths": ["src"],
        "alias": {
          "@": "./src"
        }
      }
    },
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope":"off",
    "react/jsx-uses-vars": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-key": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'react/prop-types':'off',
    "import/no-unresolved": "off",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-console": "warn",
    "react-refresh/only-export-components": "warn"
  },
};
