import React from 'react';

export const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

export const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

        // export default function(){
        //     return <p>teste</p>
        // } // Não posso retornar essa funcão sem usar o default ja que estou usando o export para cada component.

export { CompA, CompB }
export default CompA;