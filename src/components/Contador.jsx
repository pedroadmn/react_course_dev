import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(+1)
        // this.setState({ numero: this.state.numero + 1 });
        // this.state.numero = this.state.numero + 1;
    }

    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({ numero: this.state.numero - 1 });
    }

    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca });
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero} </div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
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