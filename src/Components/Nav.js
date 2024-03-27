import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../Services/authService';

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
           
                <Navbar fluid rounded className='sticky top-0 shadow-lg '>
                    <Navbar.Brand href="https://localhost:3000/">
                        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">LW Residential</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
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
                                <button className='bg-yellow-400 py-2 px-3 rounded-md mx-2 text-white font-semibold hover:bg-gray-700 focus:'
                                        onClick={handleLogout}>Logout</button>
                        }
                                                
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
               
            
    </>
  )
}

export default Nav
