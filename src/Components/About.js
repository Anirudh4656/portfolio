import React from 'react'
import "./About.css"
import {NavLink} from "react-router-dom"
import Icons from "./Icons"
import img from "./img.jpg";
const About = () => {
    return (
        <div className="About">
          <h1 className="heading"><span className="heading-border">A lil Bit</span> <span className="color">About Me</span> </h1>  
          <div className="About-section">
              <div className="Section-brief">
                 <div className="description">
                    I am Currently pursuing my Bachelor of Engineering focused in Electronics and Communication Engineering.
                    My journey Started with learning html ,css,JavaScript.From there on ,I gained more interest on  WEB-Development.
                    Currently  I am exploring  Mern Stack .I  have basic knowledge of C++ and also  exploring  DSA .

                     
                 </div>
                 <div className="Description-button">
                 <NavLink  className="Description-button1" to="/Project"><span className="Description-button-h1">Project</span ></NavLink>
                 <NavLink className="Description-button2" to="/Project"><span className="Description-button-h1">Contact</span > </NavLink>
                 </div>
              </div>              <div className="Section-photo">
                    <div className="Section-card">
                       <img  className="Section-img"src={img} alt="" />
                    </div>
                    <div className="Section-socialicons">
                        <Icons />
                    </div>

                 
              </div>
              
          </div>
        </div>
    )
}

export default About
