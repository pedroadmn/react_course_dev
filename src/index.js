import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente'

const element = document.getElementById('root');
ReactDOM.render(
    <div><PrimeiroComponente valor="Bom dia" aBcD={123} /></div>,
    element
); //JSX permite usar tags html no contexto de código javascript