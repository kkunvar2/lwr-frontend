import React, { useState } from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [accordion, setaccordion] = useState(false)
    
  return (
   <>
   <div className='h-auto md:h-screen bg-slate-300'>   
   <div>
    <Nav/>
   </div>
    <div className=' flex items-center justify-center flex-col pb-6'>
            <h1 className='text-5xl font-bold mt-10 text-slate-400'>Welcome User</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1 mt-12 gap-10 '>
                <Link to='/memmaintanence'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 p-3 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Maintanence</h2>
                        <p className='font-normal tracking-wide italic'>Your Monthly Maintanence details here</p>
                    </div>
                </Link>

                    <div onClick={() => setaccordion(!accordion)}>
                        <div className='flex flex-col bg-white w-72 p-3 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'
                            >
                            <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Complaints</h2>
                            <p className='font-normal tracking-wide italic '>Raise Your Complaints Here</p>
                        </div>
                        {/* options */}
                        <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out ${
                            accordion ? "grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0 "
                        }`}>
                           <div className='overflow-hidden mt-2'>
                            {/* raise */}
                            <Link to='/complaintForm'>
                                <div className=' h-12 w-auto text-center bg bg-gradient-to-l to-yellow-400 from-yellow-200 p-3 rounded-md text-lg font-semibold text-gray-900 shadow-xl'>
                                    Raise
                                </div>
                            </Link>
                            {/* status */}
                            <Link to='/complaintTab'>
                                <div className=' h-12 mt-2 w-auto text-center bg bg-gradient-to-l to-blue-500 from-blue-300 p-3 rounded-md text-lg font-semibold text-gray-900 shadow-xl'>
                                    Status
                                </div>
                            </Link>
                           </div>
                        </div>
                    </div>
                
                
                <Link to='/memmeeting'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Meetings</h2>
                        <p className='font-normal tracking-wide italic'>See Upcoming meetings</p>
                    </div>
                </Link>
                <Link to='/memevent'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Events</h2>
                        <p className='font-normal tracking-wide italic'>Book hall for events</p>
                    </div>
                </Link>
    
                
            </div>
            <Link to='/feed'>
                <div className='fixed bottom-2 right-2'>
                    <button className='bg-blue-500 py-2 px-3 rounded-md font-semibold'>Feedback</button>
                </div>
            </Link>
        </div>
    </div>
   </>
  )
}

export default Dashboard
