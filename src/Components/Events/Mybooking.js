import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';

const Mybooking = () => {
    const [myBookings, setmyBookings] = useState([])
    
    const fetchData = async() =>{
        try {
            const response = await axios.get(`http://localhost:8081/lwresident/v1/`)
            setmyBookings(response.data)
            }
        catch (error) {
            console.log("Error on records table while fetching");
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    //canceling event
    const cancelEvent = async(id) => {
        const token = localStorage.getItem("token")
        await axios.delete(`http://localhost:8081/lwresident/v1/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            setmyBookings(myBookings.filter(g => g.id !== id))
            alert("successfully cancle");
            
        })  
        .catch(err =>  console.log("cancling failed"))
    }

    // const filterBooking = filterDate ? myBookings.filter(book => moment(book.datefrom))
    // : myBookings;
  return (
    <>
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
                    {/* {myBookings.map((book, index) => (
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
                                                onClick={() => cancelEvent(book.memid)} />
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
    </>
  )
}

export default Mybooking