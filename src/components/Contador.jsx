import React, { Component } from 'react';

export default class Contador extends Component {
    maisUm = () => {
        this.props.numero++;
    }

    render(){
        return (
            <div>
                <div>Número: {this.props.numero} </div>
                <button onClick={this.maisUm}>Inc</button>
                <button >Dec</button>
            </div>
        )
    }
}

// Solução 1 para acessar o this no componente
// constructor(props){
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 2: Usar arrow function
//<button onClick={() => this.maisUm()}>Inc</button>

// Solução 3: Arrow function trata o this como Contador já que a função maisUm está no contexto de Contador.
//            Não importa quem chama a função
// maisUm = () => {
//         // this.props.numero++;
//         console.log(this);
//     }