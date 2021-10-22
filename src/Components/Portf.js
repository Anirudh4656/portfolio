import React from 'react'
import "./Portf.css"
import Projectfiles from "./Projectfiles"

import Tech from "./Tech";
import Project from './Project';
const Portf = (props) => {
    return (
        <div className="portfolio">
        <h1 className="Project-heading">Projects</h1>

        <div className="Project-heading-border1">
        <div className="Project-heading-border2">
            
            </div>
        </div>
        {Projectfiles.map((currElem)=>{
            return(
                <Project 
                key = {currElem.id}
            image={currElem.image}
               link={currElem.link}
            discription={currElem.discription}
            github={currElem.github}
        />
            )
        })}
       
           <Tech />
        </div>
    )
}

export default Portf;
