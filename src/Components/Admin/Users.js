import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios' 
import profile from '../Assests/user.png'


const Users = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/lwresident/v1/admin/members')
            .then(response => {
                setusers(response.data);  
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

  return (
    <>
        <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
            <Sidebar />
            {/* Main Panel */}  
            <div className="w-full lg:flex-1 p-2 ">
                {/* <Nav/> */}
                {/* content */}
                <h1 className='font-semibold text-gray-400 text-4xl py-4'>Resident Members</h1>
                <div className=' px-1 md:px-9  py-12'>
                
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*User  Card */}
                    {users.map(user => (
                        <div key={user.id} className=" max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow">
                            <div className="flex flex-col items-center pb-2">
                                <div className='flex flex-col justify-center' >
                                    <img className="w-16 h-16 md:ml-1 mb-3 mt-3 rounded-full shadow-lg" src={profile} alt="image"/>
                                    <span className={`text-sm text-white text-center font-medium bg-sky-600 p-1 rounded-md`}>{user.role}</span>
                                </div>
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                                <div className='flex gap-4'>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Wing: {user.wing}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Flat: {user.flat}</span>
                                </div>
                                <div className="flex mt-4 md:mt-3">
                                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 ">Contact</button>
                                    <button className="px-2 md:px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                        
                </div>
            </div>
        </div>
    </>
  )
}

export default Users