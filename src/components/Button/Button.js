import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
        <div className="botao">
            <button className="btn">Enviar</button>   
        </div>  
        ) 
    }
}

export default Button;