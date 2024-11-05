import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "raines-basic-components/dist/index.css"
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SpeedInsights } from "@vercel/speed-insights/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  <React.StrictMode>
    <SpeedInsights />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
