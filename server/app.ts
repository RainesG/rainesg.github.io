import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("./build"));

app.use(
  createProxyMiddleware("/api", {
    target: "http://localhost:8080",
    pathRewrite: { "^/api": "" },
    changeOrigin: true,
  })
);

app.listen(3000);
