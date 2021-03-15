if (process.env.ANALYZE === 'true') {
  module.exports = require('@next/bundle-analyzer');
}
module.exports = config => config;
