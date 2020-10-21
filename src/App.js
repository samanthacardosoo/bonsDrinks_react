import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Drinks from "./components/Drinks/Drinks"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
                <Switch>
                    <Route path='/drinks' component={Drinks} />
                    <Route path='/sobre' component={About} />
                    <Route exact path='/' component={Home}/>
                    <Route path='/time' />
                    <Route path='/contato' component={Contact} />
                </Switch>
            </BrowserRouter>
        <Footer />
      </div>
    )
  }
}



export default App;
