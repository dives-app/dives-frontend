const { withPlugins } = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins(
  [[process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')({ enable: true }) : {}]],
  {
    i18n,
  },
);
