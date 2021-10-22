import React from 'react';
import "./Header.css";
import { NavLink }  from "react-router-dom";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Hii, My Name is  <span className="main-info-span1"> Anirudh Sharma</span></h2>
               
                <h3>And I am <span></span> <span></span>
                
                <Typed 
                className="typed-text"
                strings={["Frontend Designer","Freelancer", "Mern Stack Developer"]}
                typeSpeed={60}
                backSpeed={60}
                loop
                />
                </h3>

               
                <div className="main-info-button">
                <NavLink className="main-info-al" to="/About Me">
            <span className="About-span">About </span>
            <div class="liquid"></div>
        </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
