import React, { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/icons/menu-icon.svg'
import close_icon from '../../assets/icons/close-icon.svg'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar_routes = () => {
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