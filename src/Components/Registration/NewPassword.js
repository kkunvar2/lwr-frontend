import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewPassword = () => {
    
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState({
        password: '',
        cPassword: ''
    })
    const [match, setmatch] = useState(true)

    const handlePass = (e) => {
        const {name, value} = e.target;
        setNewPassword(values => ({
            ...values,
            [name]: value,
        }))

        if (newPassword.password !== e.target.value) {
            setmatch(false);
        } else{
            setmatch(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(match){    
                axios.patch(`http://localhost:8081/lwresident/v1/forgetPassword/changePassword`, newPassword, {credentials : "include"})
                .then((res) => {
                    console.log("Password Reset Succesfully");
                    navigate("/log");
                })
                .catch(err => console.log("Failed to reset"));
        }
        else{
            console.log("Password Didin't Matched");
        }
    }
  return (
    <>
    <div className='bg-gray-800 min-h-screen'>
        <div className='pt-12'>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex flex-col justify-center mx-auto items-center">
                        <h1 className='text-white font-semibold'><span className='font-bold text-lg text-blue-500 '>L</span>/ <span className='font-bold text-lg text-yellow-300 '>W</span></h1>
                        <h3 className='text-blue-500 font-bold tracking-widest italic '>Residential</h3>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-400 dark:text-gray-200">Forgot Password</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Please submit valid mail for reset Password.</p>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div className='mt-4'>
                            <div className='input'>
                                <input className='block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300' 
                                    type='password' 
                                    name='password'
                                    placeholder='New Password' 
                                    value={newPassword.password} 
                                    onChange={handlePass} />
                            </div>
                        </div>
                        <div>
                            <div className='input'>
                                <input className='block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300' 
                                    type='password' 
                                    placeholder='Confirm Password' 
                                    name='cPassword' 
                                    value={newPassword.cPassword} 
                                    onChange={handlePass} />
                            </div>
                            {!match && <p style={{ color: "#ff6347", fontSize: "13px",  }}>Passwords doesn't match</p>}
                            
                        </div>
                        
                        <div className='text-right'>
                            <button className="w-24 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                    onClick={handleSubmit}
                                    type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-700">
                    <span className="text-sm text-gray-200 ">Go Home </span>

                    <Link to='/'>
                        <p className="mx-2 mt-3 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Click here</p>
                    </Link>
                </div>
            </div>  
        </div>    
    </div>
    </>
  )
}

export default NewPassword