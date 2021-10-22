import React from 'react'

const Project = (props) => {
    console.log(props)
    return (
        <div>
             <div className="portfolio-container">
          <a href={props.link}><img  className="portfolio-container-img" src={props.image} alt="hello" /></a>
         
         <div className="portfolio-right">
             <p className="portfolio-right-p-1" > <span className="portfolio-container-span">Discription:</span> {props.discription}
             </p>
             <p className="portfolio-right-p"> github : {props.github }</p>
         </div>


         </div>
        </div>
    )
}

export default Project;
