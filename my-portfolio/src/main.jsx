import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

// Silence Three.js Clock deprecation warning (internal to R3F)
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('THREE.Clock: This module has been deprecated')) return;
  originalWarn(...args);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)