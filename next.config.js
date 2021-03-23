const { withPlugins } = require('next-compose-plugins');
const nextTranslate = require('next-translate');

module.exports = withPlugins(
  [[process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')({ enable: true }) : {}]],
  nextTranslate(),
);
