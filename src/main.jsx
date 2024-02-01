import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignUpProvider from "./context/SignUpContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SignUpProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SignUpProvider>
);
