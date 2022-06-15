module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb9bcdd59cbcca9b3dd79b0f19904e71'),
  },
});
