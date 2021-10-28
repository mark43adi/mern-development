import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path ="/About">
        <About />
      </Route>
      <Route path ="/Contact">
        <Contact />
      </Route>
      <Route path ="/Registration">
        <Registration />
      </Route>
      <Route path ="/Login">
        <Login />
      </Route>
    </>
  )
}

export default App
