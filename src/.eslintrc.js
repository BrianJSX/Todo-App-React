module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['prettier', 'prettier/prettier'],
    rules: {
        semi: 1,
        quotes:[1, 'single'],
    },
    plugins: ['prettier'],

};