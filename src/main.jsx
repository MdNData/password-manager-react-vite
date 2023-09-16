import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import AppContext from "./GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AppContext>
      <App />
    </AppContext>
  </React.Fragment>
);
