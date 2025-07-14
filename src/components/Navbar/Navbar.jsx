import React, { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/icons/menu-icon.svg'
import close_icon from '../../assets/icons/close-icon.svg'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
        setIsSticky(window.scrollY > 100); 
        };

        window.addEventListener('scroll', handleScroll);

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        }
    }, []);

  return (
    <div className={isSticky ? 'container_navbar sticky' :'container_navbar'}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu_icon" onClick={()=>setOpenMenu(true)}>
                <img src={menu_icon} alt="" />
            </div>
            <ul ref={menuRef} className={openMenu ? 'navlinks open_menu' : 'navlinks close_menu'}>
                <img src={close_icon} alt="" className='close_icon' onClick={()=>setOpenMenu(false)} />
                <AnchorLink href='#hero' offset={50} className='anchor' ><li>Home</li></AnchorLink>
                <AnchorLink href='#about' offset={50} className='anchor'  ><li>About</li></AnchorLink>
                <AnchorLink href='#services' offset={50} className='anchor'  ><li>Services</li></AnchorLink>
                <AnchorLink href='#works' offset={50} className='anchor'  ><li>Our Works</li></AnchorLink>
                <AnchorLink href='#customers' offset={50} className='anchor'  ><li>Customers</li></AnchorLink>
                <Link to={'/contact'} className='anchor' ><li>Contact Us</li></Link>
                <AnchorLink href='#contactus' offset={50}className='anchor'  ><li className='getstart_btn'>Get Started</li></AnchorLink>
            </ul>
        </div>
  )
}

export default Navbar