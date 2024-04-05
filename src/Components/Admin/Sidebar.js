import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaUser, FaBoxOpen } from 'react-icons/fa'
import {MdSpaceDashboard} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Services/authService';

const Sidebar = () => {

    const navigate = useNavigate()

    const handelDashboard = () => {
      navigate('/adminDashboard')
    }
  
    const handelApproval = () => {
      navigate('/approval')
    }
      
    const handelMeetings = () => {
        navigate('/createmeeting')
    }

    const handelMembers = () => {
      navigate('/users')
    }

    const handelNavigation = () => {
      logoutUser();
      navigate('/log')
    }

  return (
    <>
        {/* Sidebar */}
        <div className="w-full lg:w-60 bg-slate-50 text-white flex flex-col justify-between rounded-md shadow-r-lg ">
          <div className="p-6 text-center">
            <h2 className="text-3xl font-bold text-sky-400">Admin</h2>
          </div>
          <div className='lg:w-48 flex flex-col ml-3 text-md'>
            <div
              className="flex items-center justify-between py-3 px-2 transform transition duration-200 hover:scale-105  text-gray-400 hover:text-white hover:bg-gray-400 hover:rounded-2xl rounded-2xl"
              onClick={handelDashboard}
            >
              <button className="ml-2 ">
                Dashboard
              </button>
              <MdSpaceDashboard className="w-5 h-5 text-black " />
            </div>
            <div
              className="flex items-center justify-between py-3 px-2 transform transition duration-200 hover:scale-105  text-gray-400 hover:text-white hover:bg-gray-400 hover:rounded-2xl rounded-2xl "
              onClick={handelMembers}
            >
              <button className="ml-2 ">
                Members
              </button>
              <MdSpaceDashboard className="w-5 h-5 text-black " />
            </div>
            <div
              className="flex items-center justify-between py-3 px-2 transform transition duration-200 hover:scale-105 text-gray-400 hover:text-white hover:bg-gray-400 hover:rounded-2xl rounded-2xl"
              onClick={handelApproval}
            >
              <button className="ml-2 ">
                Confirm Approval
              </button>
              <FaUser className="ml-2 w-5 h-5 text-black " />
            </div>
            <div
              className="flex items-center justify-between py-3 px-2 transform transition dublack00 hover:scale-105 ease-out text-gray-400 hover:text-white hover:bg-gray-400 hover:rounded-2xl rounded-2xl "
              onClick={handelMeetings}
            >
              <button className="ml-2 ">
                Arrange Meetings
              </button>
              <FaBoxOpen className=" w-5 h-5 text-black " />
            </div>
          </div>
          <div className="mt-auto">
            <div
              className="flex items-center py-3 px-4 text-[23px]"
              onClick={handelNavigation}
            >
              <button className="ml-2 text-gray-500">
                Log out
              </button>
              <RiLogoutCircleRLine className="ml-2 w-5 h-5 text-red-400" />
            </div>
          </div>
        </div>
   
    </>
  )
}

export default Sidebar