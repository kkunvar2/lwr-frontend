import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8081/lwresident/v1`)
        .then((res) => {
            navigate("/newPassword");
        })
        .catch(err => console.log("can't verify otp"));
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

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-400 dark:text-gray-200">Confirm OTP</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Please check your mail we are just sent you.</p>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <div className="w-full mt-4">
                              <input className="text-center w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                              type="text" 
                              placeholder="xxxx" 
                              name='otp' 
                              value={otp} 
                              onChange={(e) => setOtp(e.target.value)}
                              maxLength={4} />
                          </div>
                        <button className=" px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                onClick={handleSubmit}
                                type='submit'>
                            Verify OTP
                        </button>
                       
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-700">
                    <span className="text-sm text-gray-200 ">Go Back to Sign In? </span>

                    <Link to='/log'>
                        <p className="mx-2 mt-3 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Log In</p>
                    </Link>
                </div>
            </div>  
        </div>    
    </div>
   </>
  )
}

export default Otp