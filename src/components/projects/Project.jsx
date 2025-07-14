import React from 'react'
import { Link } from 'react-router-dom';
import './Project.css'
import project_image from '../../assets/project.webp'

const Project = () => {
  return (
    <div className='project_container'>
        <h1>Our Exclusive Project</h1>
        <div className="view_project">
             <p>From Salem And Over All – 100+ Sites Powered with Solar</p>
             <Link to={'/project'} className='anchor'  ><button className="view_btn">View all projects</button></Link>
        </div>
        <div className="projects">
            <div className="project">
                <img src={project_image} alt="" />
                <div className="project_info">
                    <h3>Solar Cart port</h3>
                    <p> 
                        Maximize your space with our innovative 
                        solar carports — a smart way to generate 
                        clean energy while providing shade and 
                        protection for vehicles
                    </p>
                </div>
            </div>
            <div className="project">
                <img src={project_image} alt="" />
                <div className="project_info">
                    <h3>Solar Cart port</h3>
                    <p> 
                        Maximize your space with our innovative 
                        solar carports — a smart way to generate 
                        clean energy while providing shade and 
                        protection for vehicles
                    </p>
                </div>
            </div>
            <div className="project">
                <img src={project_image} alt="" />
                <div className="project_info">
                    <h3>Solar Cart port</h3>
                    <p> 
                        Maximize your space with our innovative 
                        solar carports — a smart way to generate 
                        clean energy while providing shade and 
                        protection for vehicles
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project