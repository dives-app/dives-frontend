module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
  overrides: [
    {
      files: ['pages/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
