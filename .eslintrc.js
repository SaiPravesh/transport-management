module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
    },
};
