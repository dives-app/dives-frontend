module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'pl'],
  pages: {
    '*': ['common'],
    '/': ['index'],
    '/login': ['auth', 'login'],
    '/signup': ['auth', 'signup'],
    '/terms': ['terms'],
    '/privacy': ['privacy'],
    '/dashboard': ['app', 'dashboard'],
    '/budget': ['app', 'budget'],
    '/accounts': ['app', 'accounts'],
    '/stats': ['app', 'stats'],
  },
};
