import React, { useRef } from 'react'
import { Navbar } from 'flowbite-react';
import {useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../Services/authService';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Nav = () => {
    const navigate = useNavigate();
    const isLog = isLoggedIn();

    //Login
    const handleLogin = () =>{
        navigate('/log');
    }

    //register
    const handleRegister = () =>{
        navigate('/register');
    }
    //Logout
    const handleLogout = () =>{
        logoutUser();
        navigate('/log');
    }

    const handleHome = () => {
        scrollTo("home");
        navigate('/');
    }
    
    const handleDash = () => {
        navigate('/dash')
    }

    //scrolling 
    const navRef = useRef();
    const scrollTo = (targetId) => {
        const targetMenu = document.getElementById(targetId);
        if(targetMenu && navRef.current){
            window.scroll({
                top: targetMenu.offsetTop - navRef.current.offsetHeight,
                behavior: 'smooth',
            });
        }
    }
  return (
    <>
           
                <Navbar ref={navRef} fluid rounded className='sticky top-0 shadow-lg py-1 ' style={{ zIndex: 100 }}>
                    <Navbar.Brand >
                        <span className="self-center text-blue-500 whitespace-nowrap text-xl font-bold ">LW Residential</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 item-center">
                        {!isLog && 
                                <button className='bg-blue-500  px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700 focus:'
                                     onClick={handleLogin}>Login</button>
                        }
                        {!isLog &&
                                <button className='bg-yellow-400 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700 focus:'
                                onClick={handleRegister}>Signup</button>
                        }
                        
                        {isLog &&
                                <button className='bg-yellow-400 px-3 h-10 mt-2 shadow-lg rounded-md mx-2 text-white font-semibold hover:bg-gray-700  '
                                        onClick={handleLogout}>Logout</button>
                        }

                        {isLog &&
                            <Link to='/profile'>
                                 <button className='h-0 w-5 mr-2'><FaCircleUser className='h-7 w-7 mt-4  bg-sky-500 rounded-full text-gray-300 hover:text-white' /></button>
                            </Link>
                        }
                                                
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse className='pt-3 cursor-pointer'>
                            <Link to='home' spy={true} smooth={true} duration={500}>
                                    <Navbar.Link onClick={handleHome} active className=' bg-blue-500'>Home</Navbar.Link>                                                    
                            </Link>

                            <Link to='image' spy={true} smooth={true} duration={500}>
                                <Navbar.Link onClick={() => scrollTo("image")} >About</Navbar.Link>
                            </Link>

                            <Link to='contact' spy={true} smooth={true} duration={500}>
                                <Navbar.Link onClick={() => scrollTo("contact")} >Contact</Navbar.Link>
                            </Link>

                            
                                {isLog &&
                                    <Navbar.Link onClick={handleDash} >Dashboard</Navbar.Link>
                                }
                            
                    
                    </Navbar.Collapse>
                </Navbar>   
               
            
    </>
  )
}

export default Nav
