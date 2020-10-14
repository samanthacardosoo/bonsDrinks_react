import React from 'react'
import './Contact.css'
import ContactPic from '../img/contact-pic.jpg'

class Contact extends React.Component {
    render(){
        return (
            <div className="geralContatos">
                <h1 className="tituloContato">Contato</h1>   
                <div className="contatos">
                    <img src={ContactPic} alt="" className="img"></img>
                    <form className="formulario">    
                        <label>Nome: </label>
                        <input type="text" className="name"/>
                        <label>E-mail: </label>
                        <input type="text" className="email"/>
                        <label>Mensagem: </label>
                        <textarea type="text" className="msg" rows="10"/>
                        <div className="botao"> 
                            <button className="btn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}

export default Contact;