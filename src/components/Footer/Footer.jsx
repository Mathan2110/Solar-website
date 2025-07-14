import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import instagram_icon from '../../assets/icons/instagram-icon.svg'
import facebook_icon from '../../assets/icons/facebook-icon.svg'
import whatsapp_icon from '../../assets/icons/whatsapp-icon.svg'
import greaterthan_icon from '../../assets/icons/greaterthan-icon.svg'
import phone_icon from '../../assets/icons/phone-icon.svg'
import message_icon from '../../assets/icons/message-icon.svg'
import location_icon from '../../assets/icons/location-icon.svg'

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="footer_up">
            <div className="logo_links">
                <img src={logo} alt="" className='logo' />
                <p>Empowering Tamil Nadu with Future-Ready Solar Energy Solutions</p>
                <div className="link_icons">
                    <img src={instagram_icon} alt="" />
                    <img src={facebook_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer_services">
                <h2>Services</h2>
                <ul>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' /> Home</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' /> About</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Services</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Our works</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Customers</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Contact Us</li>
                </ul>
            </div>
            <div className="footer_support">
                <h2>Support</h2>
                <ul>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Terms & conditions</li>
                    <li><img src={greaterthan_icon} alt="" className='icon_greaterthan' />Support Policy</li>
                </ul>
            </div>
            <div className="footer_contactus">
                <h2>Contact Us</h2>
                <ul className='contact_icons'>
                    <li><img src={phone_icon} alt="" />  +91 94899 00140</li>
                    <li><img src={message_icon} alt="" /> asianpowerslm@gmail.com</li>
                    <li><img src={location_icon} alt="" /> 206, Ambalavanaswamy Koil Street, Gugai, Salem – 636006,Tamil Nadu, India</li>
                </ul>
            </div>
            <div className="footer_subscribenow">
                <h2>Subscribe Now</h2>
                <input type="text" placeholder='Email' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer_down">
            <p>Copyright © 2025 Asian power plant. All Rights Reserved.</p>
            <p className='privacy_policy'>Privacy policy</p>
        </div>
    </div>
  )
}

export default Footer