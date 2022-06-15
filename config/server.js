let port = process.env.PORT || 8080;

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', port),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
