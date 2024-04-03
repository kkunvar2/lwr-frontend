import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

import accept from '../Assests/correct.png'
import reject from '../Assests/delete.png' 

const Approval = () => {
    const [userList, setuserList] = useState([])
    const [status, setstatus] = useState({
    })

    //Fetched user Data
    const fetchedData = async() => {
        const token = localStorage.getItem('token')
        await axios.get('http://localhost:8081/lwresident/v1/admin/requests', {
            headers:{
                'Authoization': `Bearer ${token}`
            } 
        })
        .then(res => setuserList(res.data))
        .catch(err => console.log("Cant getting Data", err));
    }

    useEffect(() => {
        fetchedData()
    },[])

    //Accept
    const handleAccept = () => {
        try{
            const token = localStorage.getItem('token')
            const response = axios.patch('http://localhost:8081/lwresident/v1/admin/requests/approve/id',{
                headers:{
                    'Authoization': `Bearer ${token}`
                } 
            })
            if(response.ok){
               console.log("Approval Accepted Successfully")
               window.location.reload(true)
            }
        }catch(err){
            console.log("Can't Accepted")
        }
    }

    //Reject
    const handleReject = () => {
        try{
            const token = localStorage.getItem('token')
            const response = axios.patch('http://localhost:8081/lwresident/v1/admin/requests/decline/id',{
                headers:{
                    'Authoization': `Bearer ${token}`
                } 
            })
            if(response.ok){
               console.log("Approval Rejected Successfully")
               window.location.reload(true)
            }
        }catch(err){
            console.log("Can't Rejected")
        } 
    }
  return (
    <>
        <div>
            <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
                <Sidebar />
                {/* Main Panel */}
                <div className="w-full lg:flex-1 p-2 ">
                    {/* <Nav/> */}
                    <h1 className='font-semibold text-gray-400 text-4xl py-4'>Confirm Approval</h1>
                    <div className='md:px-16 py-12 '>
                        {/* Approval */}
                        <div className='grid grid-col-1 gap-2'>
                            <div>
                                <p className='text-right text-sm font-semibold text-sky-500'>USERS</p>
                            </div>

                            { userList.map((user) => (    
                                <div key={user.id} className=' flex items-center justify-between bg-gray-50 p-5 rounded-md shadow-md'>
                                    <div className='flex md:gap-12 gap-6 items-center md:w-[32rem]'>
                                        <h2 className=' font-medium'>{user.id}</h2>
                                        <div className='flex flex-col gap-1 w-[45%] md:w-[19%]'>
                                            <h2 className='text-sm font-semibold bg-yellow-400 p-[2.5px] text-white text-center rounded-full'>{user.name}</h2>
                                            <p className='text-[12px]'>Date: {user.date}</p>
                                        </div>
                                        <p className='text-[12px] md:text-[15px] tracking-widest font-medium text-slate-400 '>
                                            {user.status == "APPROVED" ? `Approved for ${<span className='text-gray-500'>{user.role}</span>}` 
                                            : `Requesting for ${user.role}`} role...
                                        </p>
                                    </div>
                                    <div className='flex gap-4 justify-center'>
                                        <img src={accept}
                                            onClick={() => handleAccept(user.id)}
                                            title='Accept'
                                            className='w-7 h-7 cursor-pointer'/>
                                        <img src={reject}
                                            onClick={() => handleReject(user.id)}
                                            title='Reject'
                                            className='w-7 h-7 cursor-pointer'/>
                                    </div>
                                </div>
                            ))}

                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Approval