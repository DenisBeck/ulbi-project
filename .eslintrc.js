module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "parser": '@typescript-eslint/parser',
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["tsconfig.strictNullChecks.json"]
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "strict-null-checks"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [2, { extensions: ['.js', '.jsx', '.tsx'] }]
    }
}
