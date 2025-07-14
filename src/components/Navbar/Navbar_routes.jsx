import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/icons/menu-icon.svg'
import close_icon from '../../assets/icons/close-icon.svg'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar_routes = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsSticky(window.scrollY > 100); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={isSticky ? 'container_navbar sticky' :'container_navbar'}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu_icon" onClick={()=>setOpenMenu(true)}>
                <img src={menu_icon} alt="" />
            </div>
            <ul className={openMenu ? 'navlinks open_menu' : 'navlinks close_menu'}>
                <img src={close_icon} alt="" className='close_icon' onClick={()=>setOpenMenu(false)} />
                <Link to={'/'} className='anchor' ><li>Home</li></Link>
                <Link to={'/'} className='anchor' ><li>About</li></Link>
                <Link to={'/'} className='anchor' ><li>Services</li></Link>
                <Link to={'/'} className='anchor' ><li>Our Works</li></Link>
                <Link to={'/'} className='anchor' ><li>Customers</li></Link>
                <Link to={'/contact'} className='anchor' ><li>Contact Us</li></Link>
                <Link to={'/'} className='anchor' ><li className='getstart_btn' >Get Started</li></Link>
            </ul>
        </div>
  )
}

export default Navbar_routes