const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://sm.ms/api/v2/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      // headers: { Authorization: "aRYfvA0vxoSiWf1Qjhy4dDeVpXpNYSfZ" },
    })
  );
};
