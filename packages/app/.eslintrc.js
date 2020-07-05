module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    // Has to be the last one in the extends array
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
