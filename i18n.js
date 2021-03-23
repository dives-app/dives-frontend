module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  pages: {
    '*': ['common'],
    '/': ['index'],
    '/login': ['login', 'auth'],
    '/signup': ['signup', 'auth'],
    '/dashboard': ['dashboard'],
  },
};
