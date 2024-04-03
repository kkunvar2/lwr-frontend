import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

const GuestRecords = () => {
    const navigate = useNavigate();

    const [guest, setguest] = useState([])
    const fetchData = async() =>{
        try {
            const response = await axios.get(`http://localhost:8081/lwresident/v1/guest/view-visitors`)
            setguest(response.data)
            }
        catch (error) {
            console.log("Error on records table while fetching");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <>
    <div className="rounded-lg overflow-x-auto h-screen bg-gray-900">
            <table className=" sm:w-full px-12 h-[20px] min-w-max text-sm text-left rtl:  text-gray-500 dark:text-gray-400">
                <thead className=" sticky text-lg text-sky-300 uppercase bg-slate-700">
                    <tr>
                        <th className="px-6 py-3">Guest Name</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Number</th>
                        <th className="px-6 py-3">In Time</th>
                        <th className="px-6 py-3">Out Time</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-200">
                    {guest.map((guest, index) => (
                        <tr key={index} className="border-b hover:bg-slate-300">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {guest.name}
                            </td>
                            <td className="px-6 py-4">{moment(guest.checkIn).format('YYYY-MM-DD')}</td>
                            <td className="px-6 py-4">{guest.mobile}</td>
                            <td className="px-6 py-4">{moment(guest.checkIn).format('hh:mm:ss A')}</td>
                            <td className="px-6 py-4">{moment(guest.checkOut).format('hh:mm:ss A')}</td>
                        </tr>
                    ))}
                    {/* <tr className="border-b hover:bg-slate-300 text-">
                            <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                Dixit
                            </td>
                            <td className="px-6 py-4">14/03/2024</td>
                            <td className="px-6 py-4">9743782745</td>
                            <td className="px-6 py-4 text-blue-500">1:00pm</td>
                            <td className="px-6 py-4 text-red-500">3:30pm</td>
                           
                        </tr> */}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default GuestRecords