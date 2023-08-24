module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },

    "settings": {
        "react": {
          "version": "detect"
        }
      },

    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
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
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks"
    ],
    "rules": {
        "no-console":"error",
        "semi": ["error", "always"],
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-explicit-any": "error",
        "react-hooks/rules-of-hooks": "error"
    }
}
