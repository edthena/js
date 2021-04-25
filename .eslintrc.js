module.exports = {
  env: { es2021: true },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'warn',
    'no-restricted-syntax': 'off',
    'prettier/prettier': 'error',
  },
};
