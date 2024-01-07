import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { GroceryProductContextProvider } from "./contexts/GroceryProducts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GroceryProductContextProvider>
        <App />
      </GroceryProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
