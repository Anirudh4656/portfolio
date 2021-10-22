import React from 'react'
import "./Frontpage.css"
import Header from "./Header"
import Particles from 'react-particles-js';
import { tsParticles } from "tsparticles";
const Frontpage = () => {
    return (
        <>
             
             
           <Particles  height="100vh"
           params={{
               particles:{
                   number:{
                       value:30,
                       density:{
                           enable:true,
                           value_area:900
                       },
                       shape:{
                           type:"square",
                           stroke:{
                               width:6,
                               color:"white"
                        
                           }
                       }
                   }
               }
           }}
           />
         <Header /> 
          
         
        </>
    )
}

export default Frontpage;
