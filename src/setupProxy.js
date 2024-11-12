const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/apis",
    createProxyMiddleware({
      target: "https://sm.ms/api/v2/",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": "",
      },
      // headers: { Authorization: "aRYfvA0vxoSiWf1Qjhy4dDeVpXpNYSfZ" },
    })
  );

  app.use(
    "/strapi",
    createProxyMiddleware({
      target: "https://dazzling-prosperity-4e8e891e34.strapiapp.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/strapi": "",
      },
      // headers: { Authorization: "aRYfvA0vxoSiWf1Qjhy4dDeVpXpNYSfZ" },
    })
  );
};
