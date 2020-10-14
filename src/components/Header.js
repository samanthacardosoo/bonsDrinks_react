import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <header className="menu">
               <nav className="header">
                    <a className="drinks" href="/drinks">Drinks</a>
                    <a className="sobre" href="/sobre">Sobre Nós</a>
                    <a className="bonsDrinks" href="/">Bons Drinks</a>
                    <a className="time" href="/time">Nosso Time</a>
                    <a className="contato" href="/contato">Contato</a>
               </nav> 
            </header>
        )
    }
}

export default Header;