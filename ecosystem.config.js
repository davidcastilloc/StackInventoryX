module.exports = {
  apps: [
    {
      name: "InventoryX",
      script: "./node_modules/.bin/nuxt",
      args: "start",
      instances: 1,
      autorestart: true,
      exp_backoff_restart_delay: 5000,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "8112b9a.online-server.cloud",
      ref: "origin/master",
      repo: "git@github.com:davidcastilloc/InventoryX2.git",
      path: "/var/www/html",
      "pre-deploy": "git fetch --all",
      "post-deploy":
        "yarn install && yarn build && pm2 reload ecosystem.config.js --env production",
    },
  },
};
