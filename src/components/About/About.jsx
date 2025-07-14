import React from 'react'
import './About.css'
import mission_icon from '../../assets/icons/mission-icon.svg'
import vission_icon from '../../assets/icons/vison-icon.svg'
import about_image from '../../assets/About_section_image.webp'
import about_image2 from '../../assets/why_choose_asian_plant.webp'
import recycle_icon from '../../assets/icons/recycle-icon.svg'
import electricity_icon from '../../assets/icons/electricity-icon.svg'
import life_span_icon from '../../assets/icons/life-span-icon.svg'
import coin_icon from '../../assets/icons/coin-icon.svg'

const About = () => {
  return (
    <>
        <div className='about_container' id='about'>
            <div className="about_left">
                <h2>About Asian Power Tech</h2>
                <p> Based in Salem, Asian Power Tech is a government-approved 
                    EPC (Engineering, Procurement, and Construction) company 
                    specializing in solar power systems and HT/LT electrical 
                    services. With over 100 successful installations, our mission is to 
                    make green energy accessible, reliable, and affordable for all.
                </p>
                <div className='card_container'>
                    <div className="card">
                        <div className="about_icon">
                            <img src={mission_icon} alt="" />
                        <span>Our Mission</span>
                        </div>
                        <p> We envision a world where 
                            every home, business, and 
                            community is powered by the 
                            sun Our goal is to lead the  
                            renewable energy
                        </p>
                    </div>
                    <div className="card">
                        <div className="about_icon">
                            <img src={vission_icon} alt="" />
                        <span>Our Vission</span>
                        </div>
                        <p> 
                            Our mission is to design, 
                            install, and maintain 
                            advanced solar systems that 
                            meet the unique energy 
                            needs of our clients
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_right">
                <div className="about_image">
                    <img src={about_image} alt="" />
                </div>
                <div className='image_text'>
                    <h2>Solar Energy</h2>
                    <p>
                        Solar energy is the clean, renewable 
                        power harnessed from the sun’s rays 
                        using technologies like solar panels.
                    </p>
                </div>
                <h1 className="experience_txt">20+ Years Of Experience</h1>
            </div>
        </div>
        <div className="chooseUs_container">
            <h2>Why choose Asian power plant</h2>
            <p className='head_para'>
                At Asian power plant we’re more than just a solar energy provider — we’re your long-term partner in 
                building a cleaner, smarter future
            </p>
            <div>
                <div className="about_image2">
                    <img src={about_image2} alt="" />
                </div>
                <div className="card_container_choose">
                    <div className="card_choose">
                        <div className='about_icon'>
                            <img src={recycle_icon}  alt="" />
                        </div>
                        <h3> Renewable & eco-friendly</h3>
                        <p>Our solar solutions harness the power of the sun</p>
                    </div>
                    <div className="card_choose">
                        <div className="about_icon">
                            <img src={electricity_icon} alt="" />
                        </div>
                        <h3>Drastically reduces electricity bills</h3>
                        <p> Switching to solar lets you generate your own power</p>
                    </div>
                    <div className="card_choose">
                        <div className="about_icon">
                            <img src={life_span_icon} alt="" />
                        </div>
                        <h3>Long lifespan (25+ years)</h3>
                        <p>Our high-quality solar panels are built to last over 25 years</p>
                    </div>
                    <div className="card_choose">
                        <div className="about_icon">
                            <img src={coin_icon} alt="" />
                        </div>
                        <h3>Low maintenance</h3>
                        <p>Solar systems require minimal upkeep, with no moving parts </p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default About