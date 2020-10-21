import React from 'react'
import './Contact.css'
import ContactPic from '../../img/contact-pic.jpg'
import Input from '../Input/Input'
import Button from '../Button/Button'

class Contact extends React.Component {
    render(){
        return (
            <div className="geralContatos">
                <h1 className="tituloContato">Contato</h1>   
                <div className="contatos">
                    <img src={ContactPic} alt="" className="img"></img>
                    <form className="formulario">    
                        <label>Nome: </label>
                        <Input />
                        <label>E-mail: </label>
                        <Input />
                        <label>Mensagem: </label>
                        <textarea type="text" className="msg" rows="10" />
                        <Button />
                    </form>
                </div>
            </div> 
        )
    }
}

export default Contact;