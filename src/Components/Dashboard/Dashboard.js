import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import { isUserRole } from '../../Services/authService'
import axios from 'axios'

import { HiUserGroup } from "react-icons/hi2";
import { FaBell } from "react-icons/fa6";
import NoticeBoard from './NoticeBoard'
import Promote from './Promote'

const Dashboard = () => {

    const isGuard = isUserRole();

    const [showNoticeboard, setshowNoticeboard] = useState(false)
    const [showpromote, setShowPromote] = useState(false)
    const [alert, setalert] = useState(false)
    const [username, setusername] = useState('')
    const [notice, setnotice] = useState([])
    const [accordion, setaccordion] = useState({
        complaints: false,
        chekIn: false
    })

    const gettingUsername = (e) => {    
    const token = localStorage.getItem('token');
        axios.get(`http://localhost:8081/lwresident/v1/member/getUser`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => setusername(res.data.name))
        .catch(err => console.log("didn't get username"));
    }
    
    //Getting NoticeBoard
    const fetchNotice = async () => {
        try {
            const res = await axios.get("http://localhost:8081/lwresident/v1/notice-board/view");
            if (res.data.length > 0) {
                setnotice(res.data);
                setalert(true);
            } else {
                setalert(false);
            }
        } catch (error) {
            console.log('Notice data did not get');
        }
    };


    useEffect(() => {
        gettingUsername();
        fetchNotice();
    }, [])

    // Check notice length when notice state changes
    useEffect(() => {
        if (notice.length > 0) {
            setalert(true);
        } else {
            setalert(false);
        }
    }, [notice]);
    
    // useEffect(() => {
    //     fetchNotice();
    // }, [])
    

    const openNoticeBoard = () => {
        setshowNoticeboard(!showNoticeboard)
    }

    const openPromote = () => {
        setShowPromote(!showpromote)
    }
    return (
        <>
   <div className='h-auto md:h-screen bg-slate-300'>   
   <div>
    <Nav/>
   </div>
    <div className=' flex items-center justify-center flex-col pb-6'>
            <h1 className='text-5xl font-bold mt-10 text-slate-400'>Welcome {username}</h1>
            {showNoticeboard && <NoticeBoard setshowNoticeboard={setshowNoticeboard} open={true} />} 
            {showpromote && <Promote setShowPromote={setShowPromote} open={true} />}  

            <div className='grid sm:grid-cols-2 grid-cols-1 mt-12 gap-10 '>
                {/* Maintanance */}
                {!isGuard &&
                    <Link to='/memMaintanance'>
                        <div className='flex flex-col bg-white w-72 cursor-pointer h-36 p-3 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                            <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Maintanence</h2>
                            <p className='font-normal tracking-wide italic text-gray-600'>Your Monthly Maintanence details here</p>
                        </div>
                    </Link>
                }

                {/* Complaints */}
                <div onClick={() => setaccordion({complaints: !accordion.complaints})}>
                    <div className='flex flex-col bg-white w-72 p-3 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'
                        >
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Complaints</h2>
                        <p className='font-normal tracking-wide italic '>Raise Your Complaints Here</p>
                    </div>
                    {/* options */}
                    <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out ${
                        accordion.complaints ? "grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0 "
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
                
                {/* Meetings */}
                <Link to='/memmeeting'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Meetings</h2>
                        <p className='font-normal tracking-wide italic'>See Upcoming meetings</p>
                    </div>
                </Link>
                {/* Events */}
                {!isGuard &&
                    <Link to='/memevent'>
                        <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                            <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Events</h2>
                            <p className='font-normal tracking-wide italic'>Book hall for events</p>
                        </div>
                    </Link>
                }

                {/* Check-In */}
                {isGuard &&
                    <div onClick={() => setaccordion({chekIn: !accordion.chekIn})}>
                    <div className='flex flex-col bg-white w-72 p-3 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'
                        >
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Check In/Out</h2>
                        <p className='font-normal tracking-wide italic '>Punching unknown guests records</p>
                    </div>
                    {/* options */}
                    <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out ${
                        accordion.chekIn ? "grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0 "
                        }`}>
                        <div className='overflow-hidden mt-2'>
                        {/* raise */}
                        <Link to='/guest'>
                            <div className=' h-12 w-auto text-center bg bg-gradient-to-l to-yellow-400 from-yellow-200 p-3 rounded-md text-lg font-semibold text-gray-900 shadow-xl'>
                                Check In
                            </div>
                        </Link>
                        {/* status */}
                        <Link to='/guestReport'>
                            <div className=' h-12 mt-2 w-auto text-center bg bg-gradient-to-l to-blue-500 from-blue-300 p-3 rounded-md text-lg font-semibold text-gray-900 shadow-xl'>
                                Check Out
                            </div>
                        </Link>
                        </div>
                    </div>
                    </div> 
                }
                    
                
            </div>
            <Link to='/feed'>
                <div className='fixed bottom-2 right-40 md:right-2'>
                    <button className='bg-yellow-500 py-2 text-white px-3 rounded-md font-semibold'>Feedback</button>
                </div>
            </Link>

            {/* NoitceBoard */}
            <div className='fixed bottom-3 right-3 md:bottom-14 bg-black p-2 rounded-full '
                >
                <FaBell className='h-7 w-7 text-white rotate-12'
                    onClick={openNoticeBoard}/>
                    {alert && 
                        <p className=' absolute right-0 top-0 bg-sky-600 text-sky-500 rounded-full h-3 w-3' content=''></p>
                    }
            </div>
            
            {/* Request for posts */}
            <div className='fixed bottom-20 right-3 md:bottom-28 bg-black p-2 rounded-full '
                >
                <HiUserGroup className='text-white h-7 w-7'
                onClick={openPromote}/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Dashboard
