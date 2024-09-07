import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeConfig } from "./config.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.css";

function Main() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeConfig>
    <Main />
  </ThemeConfig>
);
