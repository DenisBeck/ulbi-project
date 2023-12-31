module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended", 
    "standard-with-typescript", 
    "plugin:react/recommended", 
    "prettier", 
    "plugin:i18next/recommended", 
    "plugin:storybook/recommended"
  ],
  "parser": '@typescript-eslint/parser',
  "overrides": [{
    "env": {
      "node": true
    },
    "files": [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
    "parserOptions": {
      "sourceType": "script"
    },
    'rules': {
      "i18next/no-literal-string": 'off'
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["tsconfig.strictNullChecks.json"]
  },
  "plugins": [
    "react", 
    "@typescript-eslint", 
    "strict-null-checks", 
    "i18next", 
    "react-hooks",
    "ulbi-plugin",
    "unused-imports"
  ],
  "rules": {
  //   "react/jsx-indent": [2, 4],
  //   "indent": [2, 4],
    "unused-imports/no-unused-imports": "error",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    "i18next/no-literal-string": ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid']
    }],
    "max-len": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    // "no-params-reassign": "off",
    "no-undef": "off",
    "strict-boolean-expressions": 'off',
    "ulbi-plugin/path-checker": ["error", { alias: '@' }],
    'ulbi-plugin/layer-imports': [
      'error',
      {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    "ulbi-plugin/public-api-imports": ["error", { 
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
    }],
  },
  globals: {
    _IS_DEV_: true,
    _API_: true,
    _PROJECT_: true,
  }
};