import React from "react";
import ReactDOM from "react-dom";
import { PrimerApp } from "./PrimeraApp";
import './index.css';

const divApp = document.querySelector('#app');

ReactDOM.render(<PrimerApp prueba="Hello, I am Gerard" />, divApp);