import React from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='getstarted_container' id='contactus'>
        <h3>Get Started</h3>
        <h1>Start Your Solar Journey Today</h1>
        <p> Make the switch to clean, renewable energy today. Whether you're a homeowner, business, or community organization, our expert team is here to guide you every step of the way</p>
        <Link to={'/contact'} ><button className='getstarted_btn'>Contact Us</button></Link>
    </div>
  )
}

export default GetStarted