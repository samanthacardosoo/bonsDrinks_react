import React from 'react';
import Require from '../Require/Require';
//import './Header.css';

class Drinks extends React.Component {
    render(){
        return (
            <div>
                {Require}
                <h1>Drink</h1>
                <img alt=""></img>
            </div>
        )
    }
}

export default Drinks;


  /*   constructor(props){
        super(props)
    }
    
    componentDidMount(){
        const resultado = search();
        return resultado;
    } */