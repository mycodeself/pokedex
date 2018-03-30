import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App';
import getPokemonsService from "./services/getPokemonsService";
getPokemonsService().then((data) => console.log(data)).catch(error => console.log(error));
const root = document.getElementById('react-root');
ReactDOM.render(<App />, root);