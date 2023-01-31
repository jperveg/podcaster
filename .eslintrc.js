module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    overrides: [
    ],
    settings: {
        react: {
            version: 'detect',
        }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'react',
        'react-hooks'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-no-literals': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        "react-hooks/exhaustive-deps": "error",
    }
}
