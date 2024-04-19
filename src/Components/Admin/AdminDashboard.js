import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//icons
import { PiUsersBold } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import Sidebar from './Sidebar';
import AddNotice from './AddNotice';

const AdminDashboard = () => {

  const [count, setcount] = useState({
    members: 0,
    secretaries: 0
  })

  const [show, setshow] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8081/lwresident/v1/admin/members')
    .then((res)=> {
      const secretary = res.data.filter(user => user.role === 'SECRETORY');
      const member = res.data.filter(user => user.role === 'MEMBER');

      setcount({
        members: member.length,
        secretaries: secretary.length 
      })

    }).catch(err => console.log("fetching failed"))

  },[])


  
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
        <Sidebar />
        {/* Main Panel */}  
        <div className="w-full lg:flex-1 p-2 ">
            {/* <Nav/> */}
            <div className='px-4 flex justify-between items-center'>
              <h1 className='font-semibold text-gray-400 text-4xl py-4'>Dashboard</h1>
              <button className='px-5 py-1 bg-gradient-to-l from-yellow-400 to-yellow-200 text-white rounded-md font-medium hover:scale-110 duration-300'
                    onClick={() => setshow(!show)}>
                Create Notice +</button>
            </div>


            {/* content */}
            <div className=' px-16 py-12'>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="flex-col bg-gradient-to-l from-yellow-400 to-yellow-200 p-4 rounded-lg shadow-lg flex items-center justify-center gap-4 h-[12rem] transform transition duration-300  hover:scale-105">
                <div className='flex items-center gap-2'>
                  <PiUsersBold className='w-10 h-10' />
                  <h2 className='text-2xl'>Secrataries</h2>
                </div>
                <div className='text-5xl font-bold text-white'>
                  {count.secretaries}+
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-col bg-gradient-to-l from-blue-500 to-blue-300 p-4 rounded-lg shadow-lg flex items-center justify-center gap-4 h-[12rem] transform transition duration-300  hover:scale-105">
                <div className='flex items-center gap-5'>
                    <PiUsersThree className='w-12 h-12' />
                    <h2 className='text-2xl'>Members</h2>
                </div>
                  <div className='text-5xl font-bold text-white'>
                  {count.members}+
                </div>
              </div>

              {/* Notice Board */}
              {show && 
                <div className=''>
                  <AddNotice setshow={setshow}/>
                  </div>}

              {/* Card 3 */}
              {/* <div className=" flex-col bg-gradient-to-l from-orange-500 to-orange-300 p-4 rounded-lg shadow-lg flex items-center justify-center h-[12rem] transform transition duration-300  hover:scale-105">
                
              </div> */}

              </div>

              {/* users actions analysis */}
            </div>

            <div className='grid grid-cols-2 gap-5 py-12 md:px-12'>
              {/* Bookings */}
              <Link to='/allBookings'>
                <div className='flex items-center bg-slate-50  rounded-md shadow-md hover:bg-slate-200'>
                  <p className='bg-gray-400  text-gray-400 h-10 w-2 rounded-xl content-none' >.</p>
                  <p className='ml-5 font-semibold tracking-widest text-blue-400'>Bookings</p>
                </div>
              </Link>
              {/* Complaints */}
              <Link to='/allComplaints'>
                <div className='flex items-center bg-slate-50  rounded-md shadow-md hover:bg-slate-200'>
                  <p className='bg-gray-400  text-gray-400 h-10 w-2 rounded-xl content-none' >.</p>
                  <p className='ml-5 font-semibold tracking-widest text-blue-400'>Complaints</p>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default AdminDashboard