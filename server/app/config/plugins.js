module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'smtp.ionos.com', //SMTP Host
      port: 587   , //SMTP Port
      secure: false,
      username: 'info@pc911itservices.com',
      password: '@dmin1234$$$$',
      rejectUnauthorized: false,
      requireTLS: false,
      connectionTimeout: 1,
    },
    settings: {
      from: 'info@pc911itservices.com',
      replyTo: 'info@pc911itservices.com',
    },
  },
});