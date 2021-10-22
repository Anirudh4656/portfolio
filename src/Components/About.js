import React from 'react'
import "./About.css"
import {NavLink} from "react-router-dom"
import Icons from "./Icons"
import image from "./image.jpg";
const About = () => {
    return (
        <div className="About">
          <h1 className="heading"><span className="heading-border">A lil Bit</span> <span className="color">About Me</span> </h1>  
          <div className="About-section">
              <div className="Section-brief">
                 <div className="discription">
                    I am Currently pursuing my Bachelor of Engineering focused in Electronics and Communication Engineering.
                    My journey Started with learning html ,css.From there on ,I gained more interest on  WEB-Development.
                    Currently  I am learning Mern Stack .I  also have basic knowledge of C++ and  also exploring DSA .

                     
                 </div>
                 <div className="Discription-button">
                 <NavLink  className="Discription-button1" to="/Project"><span className="Discription-button-h1">Project</span ></NavLink>
                 <NavLink className="Discription-button2" to="/Project"><span className="Discription-button-h1">Contact</span > </NavLink>
                 </div>
              </div>              <div className="Section-photo">
                    <div className="Section-card">
                       <img  className="Section-img"src={image} alt="" />
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
