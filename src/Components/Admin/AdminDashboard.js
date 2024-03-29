import React from 'react'
import { useNavigate } from 'react-router-dom'
//icons
import { PiUsersBold } from "react-icons/pi";

import { PiUsersThree } from "react-icons/pi";
import Sidebar from './Sidebar';
import Nav from '../Nav';

const AdminDashboard = () => {


  return (
    <>
    <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
        <Sidebar />
        {/* Main Panel */}
        <div className="w-full lg:flex-1 p-2 ">
            <Nav/>
            {/* content */}
            <h1 className='font-semibold text-gray-400 text-4xl'>Dashboard</h1>
            <div className=' px-16 py-12'>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="flex-col bg-gradient-to-l from-yellow-400 to-yellow-200 p-4 rounded-lg shadow-lg flex items-center justify-center gap-4 h-[12rem] transform transition duration-300  hover:scale-105">
                <div className='flex items-center gap-2'>
                  <PiUsersBold className='w-10 h-10' />
                  <h2 className='text-2xl'>Secrataries</h2>
                </div>
                <div className='text-5xl font-bold text-white'>
                  3+
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-col bg-gradient-to-l from-blue-500 to-blue-300 p-4 rounded-lg shadow-lg flex items-center justify-center gap-4 h-[12rem] transform transition duration-300  hover:scale-105">
                <div className='flex items-center gap-5'>
                    <PiUsersThree className='w-12 h-12' />
                    <h2 className='text-2xl'>Members</h2>
                </div>
                  <div className='text-5xl font-bold text-white'>
                  12+
                </div>
              </div>

              {/* Card 3 */}
              <div className=" flex-col bg-gradient-to-l from-orange-500 to-orange-300 p-4 rounded-lg shadow-lg flex items-center justify-center h-[12rem] transform transition duration-300  hover:scale-105">
                
              </div>

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AdminDashboard