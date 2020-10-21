import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <header className="menu">
               <nav className="header">
                            <Link className="drinks" to="/drinks">Drinks</Link>
                            <Link className="sobre" to="/sobre">Sobre Nós</Link>
                            <Link className="bonsDrinks" to="/">Bons Drinks</Link>
                            <Link className="time" to="/time">Nosso Time</Link>
                            <Link className="contato" to="/contato">Contato</Link>    
               </nav> 
            </header>
        )
    }
}

export default Header;