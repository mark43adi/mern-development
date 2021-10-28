import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml -auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Registration">Registration</NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar