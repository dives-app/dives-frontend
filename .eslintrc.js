module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['App', 'Component'],
      },
    ],
  },
};
