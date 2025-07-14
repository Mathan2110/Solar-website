import React from 'react'
import './Latest_insight.css'
import project_image from '../../assets/project.webp'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'

const Latest_insight = () => {
  return (
    <div className='latest_insight_container' >
        <h1>Latest Insights & Updates</h1>
        <div className="view_sight">
            <p> Stay informed with the latest news, tips, and trends in solar energy and sustainable power</p>
            <Link to={'/blog'}><button className='view_btn'>View all insight</button></Link>
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
                    <div className="pic_rating">
                        <img src={profile} alt="" />
                        <div className="name">
                            <div>Olivia</div>
                            <div>20 jan 2025</div>
                        </div>
                    </div>
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
                    <div className="pic_rating">
                        <img src={profile} alt="" />
                        <div className="name">
                            <div>Olivia</div>
                            <div>20 jan 2025</div>
                        </div>
                    </div>
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
                    <div className="pic_rating">
                        <img className='sight_profile' src={profile} alt="" />
                        <div className="name">
                            <div>Olivia</div>
                            <div>20 jan 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest_insight