import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../Services/authService';
import { FaCircleUser } from "react-icons/fa6";

const Nav = () => {
    const navigate = useNavigate();
    const isLog = isLoggedIn();

    //Logout
    const handleLogout = () =>{
        logoutUser();
        navigate('/log');
    }

  return (
    <>
           
                <Navbar fluid rounded className='sticky top-0 shadow-lg py-1 ' style={{ zIndex: 100 }}>
                    <Navbar.Brand >
                        <span className="self-center text-blue-500 whitespace-nowrap text-xl font-bold ">LW Residential</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 item-center">
                        {!isLog && 
                            <Link to='/log'>
                                <button className='bg-blue-500 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700 focus:'>Login</button>
                            </Link>
                        }
                        {!isLog &&
                            <Link to='/register'>
                                <button className='bg-yellow-400 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700 focus:'>Signup</button>
                            </Link>
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
                    <Navbar.Collapse className='pt-3'>
                            <Link to='/'>
                                    <Navbar.Link  active className=' bg-blue-500'>Home</Navbar.Link>                                                    
                            </Link>
                            <Navbar.Link href="#">About</Navbar.Link>
                            <Navbar.Link href="#">Contact</Navbar.Link>
                            <Link to='/dash'>
                                {isLog &&
                                    <Navbar.Link >Dashboard</Navbar.Link>
                                }
                            </Link>
                    
                    </Navbar.Collapse>
                </Navbar>   
               
            
    </>
  )
}

export default Nav
