import React from 'react';
import store from '../../store';
import './Projects.css';

const Projects = () => {
//store the projects in an object of arrays with each array being each project. Each project has fields "name", "description", "images(an array of objects with fields imgTitle and img itself)"
//Then import them in this module and map over them to display them on UI to avoid repeating code. 

    return (
        <section className="projects-wrapper">
            {store.map(project => { //grab each project
                return <div className="each-project" key={project.name}>
                    <h4>{project.name}</h4>
                    {project.images.map(eachImg => { //grab each image
                        return <img key={eachImg.imgTitle} src={eachImg.img} alt={eachImg.imgTitle}></img>
                    })}
                    <div>{project.desc}</div>
                    <h5>Tech Used:</h5>
                    <div></div>
                </div>
            })}
        </section>
    )
}

export default Projects;


