import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    )
  }
}



export default App;
