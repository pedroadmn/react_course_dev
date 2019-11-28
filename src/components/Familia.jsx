import React from 'react';
import { filhosComProps } from '../utils/Utils';

export default props =>
        <div>
            <h1>Família {props.sobrenome}</h1>

            {filhosComProps(props)}

            {/*{React.Children.map(props.children, filho => {
                return React.cloneElement(filho, { ...props })
            })}*/}
            
            {/*{React.cloneElement(props.children, { ...props })}*/}

            {/*{React.cloneElement(props.children, props)}  Menos usado*/}

            {/*<h1>Família {props.sobrenome}</h1>
            {React.cloneElement(props.children, { sobrenome: props.sobrenome })}*/}

            {/*{props.children}*/}
        </div>