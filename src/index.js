import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './components/PrimeiroComponente';
// import CompA, { CompB as B } from './components/DoisComponentes';
// import MultiElementos from './components/MultiElementos';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Pai from './components/Pai';
// import ComponenteClasse from './components/ComponenteClasse';
// import Contador from './components/Contador';
import Hook from './components/Hook';

const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <Hook />
        {/*<Contador numeroInicial={100}/>*/}
        {/*<ComponenteClasse valor="Sou um componente de classe"/>*/}
        {/*<Pai />*/}
        {/*<ComponenteComFuncao></ComponenteComFuncao>*/}
        {/*<Familia sobrenome='Pereira'>
            <Membro nome='Andre' />
            <Membro nome='Mariana' />
        </Familia>*/}
        {/*<FamiliaSilva/>*/}
        {/*<MultiElementos />*/}
        {/*<CompA valor="Olá eu sou A!" />
        <B valor="Olá eu sou B!" />*/}
        {/*<PrimeiroComponente valor="Bom dia" aBcD={123} />*/}
    </div>,
    element
); //JSX permite usar tags html no contexto de código javascript