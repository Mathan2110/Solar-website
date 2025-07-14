import React from 'react'
import './ContactUs.css'
import greaterthan_icon from '../../assets/icons/greaterthan-icon.svg'
import greaterthan_white_icon from '../../assets/icons/greaterthan-white.svg'
import contact_image from '../../assets/contact-image.jpg'
import phone_icon from '../../assets/icons/phone-icon.svg'
import message_icon from '../../assets/icons/message-icon.svg'
import location_icon from '../../assets/icons/location-icon.svg'
import map_image from '../../assets/map-image.jpg'

const ContactUs = () => {
  return (
    <>
    <div className="banner_contact">
        <h1>Contact Us</h1>
        <div>
            <p>Home</p> 
            <img src={greaterthan_icon} alt="" className='black_icon' />
            <img src={greaterthan_icon} alt="" className='black_icon' />
            <img src={greaterthan_white_icon} alt="" className='white_icon' />
            <img src={greaterthan_white_icon} alt="" className='white_icon' />
            <p>Contact Us</p>
        </div>
    </div>
    <div className='contactus_container'>
        <div className="contactus_left">
            <h4>Contact Us</h4>
            <h1>Get In Touch</h1>
            <hr />
            <hr />
            <hr />
            <div className="contactus_form">
                <input type="text" placeholder='Your Name' />
                <input type="number" placeholder='Your Number' />
                <input type="email" placeholder='Your Email' />
                <textarea name="message" id="" placeholder='Your Message'></textarea>
                <button>Send message</button>
            </div>
        </div>
        <div className="contactus_right">
            <div className="contactus_image">
                <img src={contact_image} alt="" />
            </div>
            <div className="address">
                <h3>Registered Office</h3>
                <p>Empowering Tamil Nadu with Future-Ready Solar Energy Solutions</p>
            </div>
            <div className="quick_contact">
                <h3>Quick Contact</h3>
                <ul className='contact_icons'>
                    <li><img src={phone_icon} alt="" />  +91 94899 00140</li>
                    <li><img src={message_icon} alt="" /> asianpowerslm@gmail.com</li>
                    <li><img src={location_icon} alt="" /> 206, Ambalavanaswamy Koil Street, Gugai, Salem – 636006,Tamil Nadu, India</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="map">
        <img src={map_image} alt="" />
    </div>
    </>
  )
}

export default ContactUs