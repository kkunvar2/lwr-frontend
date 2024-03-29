import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { LuUser2 } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import axios from 'axios';
import { logoutUser } from '../Services/authService';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate();
    const [editProfile, setEditProfile] = useState(false)
    const [userData, setuserData] = useState({
        id: '',
        name: '',
        mobile: '',
        email: '',
        password: '',
        wing: 'c',
        flat: '01'
      })
    

    //Retrieve Data
    const fetchData = async() =>{
    const token = localStorage.getItem('token');
    // const userId = parseInt(userData.id); 
        await axios.get(`http://localhost:8081/lwresident/v1/member/getUser`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
        .then((res =>{
            setuserData(res.data)
        }))
        .catch(err => {
            console.log("User data didn't fetched", err)
        })
    }

    //Update data
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.patch('http://localhost:8081/lwresident/v1/member/updateProfile', userData)
        .then(res => {
          alert("Data updated") 
        })
        .catch(err => console.log("user Data didn't Updated",err));
        console.log(userData)
    }

    useEffect(() =>{
        fetchData()
        console.log('profile')
    }, [editProfile])

    
    const handleChange = (e) => {
        const {name, value} = e.target;
    setuserData(prevData => ({
        ...prevData,
        [name]: value
    }));
}

//Logout
const handleLogout = () =>{
    logoutUser();
    navigate('/log');
}

  return (
    <>
        <div className='bg-slate-200 h-screen'>
            <Nav/>
            <div className='md:px-24 px-3'>
                <div className='flex py-10 items-center gap-12'>
                    <LuUser2 className='h-24 w-24'/>
                    <div className='flex  flex-col gap-4'>
                            <h4 className='md:text-5xl text-2xl text-gray-700 font-semibold'>Welcome <span className='text-yellow-500'>{userData.name}</span></h4>
                    
                        <div className='flex gap-1  cursor-pointer'
                            onClick={() => setEditProfile(!editProfile)}>
                            <p className='text-yellow-500 hover:text-gray-600'>Edit Profile</p>
                            <FaPen className='text-yellow-500'/>
                        </div>
                    </div>
                </div>

                {/* edit profile */}
                <h1 className='font-bold mb-2 text-gray-700'>Edit Profile</h1>
                <div className='flex flex-col '>
                {editProfile &&
                    <div className='bg-gray-100 py-4 px-3 rounded-md '>
                        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col text-sm gap-2'>    
                                <label>Name:</label>
                                <input className='bg-slate-100 rounded-md h-7 p-2'
                                    type='text'
                                    name='name'
                                    value={userData.name}
                                    onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col text-sm gap-2'>
                                <label>Contact No:</label>
                                <input className='bg-slate-100 rounded-md h-7 p-2'
                                    type='tel'
                                    name='mobile'
                                    value={userData.mobile}
                                    onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col text-sm gap-2'>    
                                <label>Email:</label>
                                <input className='bg-slate-100 rounded-md h-7 p-2'
                                    type='email'
                                    name='email'
                                    value={userData.email}
                                    onChange={handleChange}/>
                            </div>
                            <div className='flex flex-col text-sm gap-2'>
                                <label>Password:</label>
                                <input className='bg-slate-100 rounded-md h-7 p-2'
                                    type='password'
                                    name='password'
                                    value={userData.password}
                                    onChange={handleChange}/>
                            </div>
                            <button className='bg-blue-500 px-3 h-10 mt-2 shadow-lg rounded-md mx-2 text-white font-semibold hover:bg-gray-700'
                                type='submit'>Update</button>
                        </form>
                    </div>
                }
                </div>
                <div>
                <button className=' absolute bottom-3 left-36 bg-yellow-400 px-3 h-10 mt-2 shadow-lg rounded-md mx-2 text-white font-semibold hover:bg-gray-700  '
                    onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile