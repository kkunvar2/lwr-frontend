import React, { useEffect, useState } from 'react'
import Sidebar from '../Admin/Sidebar' 
import moment from 'moment'
import axios from 'axios'

import { MdDeleteForever } from "react-icons/md";

const AllBookings = () => {

    const [bookings, setbookings] = useState([])
    const [filterDate, setFilterDate] = useState('');

    const fetchData = async() =>{
        try {
            const response = await axios.get(`http://localhost:8081/lwresident/v1/`)
            setbookings(response.data)
            }
        catch (error) {
            console.log("Error on records table while fetching");
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    //Cancle Events
    const cancelEvent = async(id) =>{   
        const token = localStorage.getItem('token')
        await axios.delete(`http://localhost:8081/lwresident/v1/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setbookings(bookings.filter(g => g.id !== id))
            alert("successfully cancle");
            
        })  
        .catch(err =>  console.log("cancling failed"))
    }

    const filterBooking = filterDate ? bookings.filter(book => moment(book.datefrom))
    : bookings;
  return (
    <>
        <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
            <Sidebar />
            {/* Main Panel */}
            <div className="w-full lg:flex-1 p-2 ">
                {/* <Nav/> */}
                <h1 className='font-semibold text-gray-400 text-4xl py-4'>All Booked Events</h1>
                <div className='md:px-12 pb-4 '>
                        {/* Date filter input */}
                        <div className='flex justify-end'>
                            <input
                                    type="date"
                                    value={filterDate}
                                    onChange={(e) => setFilterDate(e.target.value)}
                                    className="p-2 w-9 rounded-md my-4"
                                />
                        </div>
                    <div className="rounded-lg overflow-x-auto pb-4 h-[30rem] bg-slate-700">
                        <table className=" sm:w-full px-12 h-[20px] min-w-max text-sm text-left  text-gray-500 dark:text-gray-400">
                            <thead className=" sticky text-lg text-sky-400 uppercase bg-gray-100 shadow-xl">
                                <tr className=' '>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Type</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Date From</th>
                                    <th className="px-6 py-3">Date To</th>
                                    <th className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-200">
                                {/* {filterBooking.map((book, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-300">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {book.id}
                                        </td>
                                        <td className="px-6 py-4">{book.funcType}</td>
                                        <td className="px-6 py-4">{name}</td>
                                        <td className="px-6 py-4">{moment(book.dateFrom).format('YYYY-MM-DD')}</td>
                                        <td className="px-6 py-4">{moment(book.dateTo).format('YYYY-MM-DD')}</td>
                                        <td className="px-6 py-4">
                                            <MdDeleteForever className='text-red-700 w-6 h-6' 
                                                            onClick={() => cancelEvent(book.id)} />
                                        </td>
                                    </tr>
                                ))} */}
                                <tr className="border-b  hover:bg-slate-300 text-">
                                        <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                            <p className=' text-gray-900 text-lg rounded-full'>12</p>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900  ">Birthday</td>
                                        <td className="px-6 py-4 text-gray-900  ">Dixit Vara</td>
                                        <td className="px-6 py-4 text-black font-medium text-md">2024-04-12</td>
                                        <td className="px-6 py-4 text-black font-medium text-md">2024-04-15</td>
                                        <td className="px-6 py-4">
                                            <MdDeleteForever className='text-red-700 w-6 h-6' 
                                                            onClick={() => cancelEvent()} />
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllBookings