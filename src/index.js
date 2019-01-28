import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Parent from "./Parent";
import * as serviceWorker from "./serviceWorker";

// example 1
//ReactDOM.render(<App />, document.getElementById("root"));

// example 2
// These two containers are siblings in the DOM
const appRoot = document.getElementById("app-root");
ReactDOM.render(<Parent />, appRoot);
//const modalRoot = document.getElementById('modal-root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
