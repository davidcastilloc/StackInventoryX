module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  url: env("URL", "http://localhost:1337"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "1f4bb3dd2d78fd4a89e134b728bc9335"),
    },
  },
});
