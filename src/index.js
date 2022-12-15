import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlumbProvider } from "./contexts/plumbContext";
import "jsplumb/css/jsplumbtoolkit-defaults.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PlumbProvider>
      <App />
    </PlumbProvider>
  </React.StrictMode>
);
