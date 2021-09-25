import React from 'react';
import store from '../../store';
import './Projects.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideShow from '../SlideShow/SlideShow';

const Projects = () => {
    //store the projects in an object of arrays with each array being each project. Each project has fields "name", "description", "images(an array of objects with fields imgTitle and img itself)"
    //Then import them in this module and map over them to display them on UI to avoid repeating code. 

    return (
        <section id="projects">
            <h2>Projects</h2>
            {store.map(project => { //grab each project
                return <div className="each-project" key={project.name}>
                    <h3 className="project-title">{project.name}</h3>
                 

                    {project.images.map(eachImg => {
                        return <img key={eachImg.imgTitle} className="img" src={eachImg.img} alt={eachImg.imgTitle} />
                    })}  
                    <div className="links">{project.links.map(link => {
                        return <div className="link" key={link.name}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}</a>
                            <a href={link.url} target="_blank" rel="noopener noreferrer"><h4>{link.name}</h4></a>
                        </div>
                    })}</div>
                    <div>{project.desc}</div>
                    <h4>Tech Used:</h4>
                    <div className="tech-used">
                        {project.tech.map(icons => {
                            return <i key={icons.techName}>{icons.techIcon}</i>
                        })}
                    </div>
                </div>
            })}
        </section>
    )
}

export default Projects;


