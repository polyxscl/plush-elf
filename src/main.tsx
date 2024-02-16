import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

// Disable default context menu (that context menu when you right click on a web page)
document.addEventListener("contextmenu", (e) => e.preventDefault());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
