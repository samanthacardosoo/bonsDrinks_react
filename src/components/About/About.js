import React from 'react';
import AboutPic from '../../img/about-pic.jpg';
import './About.css';

class About extends React.Component {
    render(){
        return (
            <div className="geralAbout">
                <h1 className="titulo">Sobre Nós</h1>
                <div className="about">
                    <img src={AboutPic} alt='' className='img' />
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;