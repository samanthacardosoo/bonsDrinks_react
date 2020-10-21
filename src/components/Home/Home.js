import React from 'react';
import BgDrinks from '../../img/bg-bons-drinks.jpg';
import './Home.css';

class Home extends React.Component {
    render(){
        return (
            <div className="geralHome">    
                    <div className="img">
                    <div>
                        <h1 className="titulo">Bons Drinks</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;