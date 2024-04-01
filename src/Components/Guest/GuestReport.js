import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const GuestReport = () => {

    const navigate = useNavigate();
    const [guest, setguest] = useState([])

    const fetchData = async() => {
        try {
            const response = await axios.get(`http://localhost:8081/lwresident/v1/guest/viewUser`)
            setguest(response.data)
            
        } catch (error) {
            console.log("Your Data didn't fetched")
        }
    }

    useEffect(()=> {
        fetchData();
    }, [])

    const hanlecheckOut = async() =>{
        try{
            const token = localStorage.getItem('token')
            const response  = await axios.delete('http:localhost:8081/lwresident/v1/checkout', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.ok){
                navigate('/guest');
            }
        } catch(err){
            console.log("Can't Deleted records");
        }

    }
    return (
        <>
            <div className=" rounded-lg overflow-x-auto h-screen bg-gray-900">
                <table className="sm:w-full px-12 h-[20px] min-w-max text-sm text-left rtl:  text-gray-500 dark:text-gray-400">
                    <thead className=" sticky text-lg text-sky-300 uppercase bg-slate-700">
                        <tr>
                            <th className="px-6 py-3">Guest Name</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">In Time</th>
                            <th className="px-6 py-3">Number</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-200">
                        {guest.map((guest, index) => (
                            <tr key={index} className="border-b hover:bg-slate-300">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {guest.name}
                                </td>
                                <td className="px-6 py-4">{guest.date}</td>
                                <td className="px-6 py-4">{moment(guest.checkIn).format('hh:mm:ss A')}</td>
                                <td className="px-6 py-4">{guest.mobile}</td>
                                <td className="px-6 py-4">
                                    <button onClick={hanlecheckOut} className='bg-red-500 text-white p-[6px] rounded-md font-medium hover:bg-red-700'>Check Out</button>
                                </td>
                            </tr>
                        ))}
                      
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default GuestReport