import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import Store from "./store/Store";
// import { Provider } from "react-redux";


// Render and Provider store to App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider Store={Store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
