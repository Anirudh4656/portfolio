import React from 'react'
import { NavLink }  from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div >
         <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon">   
    <i class="fas fa-bars"></i>
</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink className="menu-bar-a" to="/portfolio">Home</NavLink>
     
      <NavLink className="menu-bar-a" to="/About Me">About Me</NavLink>
      <NavLink className="menu-bar-a" to="/Project">Project</NavLink>
      <NavLink className="menu-bar-a" to="/Contact">Contact</NavLink>
      <NavLink className="menu-bar-a" to="/Blogs">Blogs</NavLink>
       
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
