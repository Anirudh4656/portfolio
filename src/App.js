import React from 'react'
import "./App.css";
import {Route} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Frontpage from "./Components/Frontpage";
import About from "./Components/About";
import Portf from "./Components/Portf";
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <>
     <Navbar />
     <Route  exact path="/portfolio" >
    <Frontpage />
    </Route>
    <Route path="/About Me" >
    <About />
    </Route>
    <Route path="/Project" >
    <Portf />
    </Route>
    
    </>


  )
}

export default App;
