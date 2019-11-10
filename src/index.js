import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RootComponent from "./app";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";

import store from "./configureStore";

ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById("root")
);
