import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'

const Hero = () => {

  return (
    <div className='container' id='hero'>
        <div className="home">
            <h1>Power Your Future With Solar</h1>
            <p>Make the switch to clean, cost-saving solar energy today</p>
            <AnchorLink href='#services' offset={50} className='anchor'  ><button>Service We Provide</button></AnchorLink>
        </div>
    </div>
  )
}

export default Hero