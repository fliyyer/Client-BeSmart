import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles/sign-in.css'
import './styles/utilities.css'
import './styles/sign-up.css'
import './styles/sign-up-success.css'
import './styles/sign-up-photo.css'
import './styles/complete-checkout.css'
import './styles/homepage.css'
import './styles/Product.css'
import './styles/detail.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
