import React from "react";
import ReactDOM from "react-dom";
//import { PrimerApp } from "./PrimeraApp";
import './index.css';
import { CounterApp } from "./CounterApp";

const divApp = document.querySelector('#app');


//ReactDOM.render(<PrimerApp prueba = "Hola, Soy Goku" />, divApp);
ReactDOM.render(<CounterApp value = {0} />, divApp);