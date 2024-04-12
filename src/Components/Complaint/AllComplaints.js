import React, { useEffect, useState } from 'react'
import Sidebar from '../Admin/Sidebar'
import { PiHandPalmFill } from "react-icons/pi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from 'axios';


const AllComplaints = () => {
    const [complaints, setComplaints] = useState([])
    const [filter, setfilter] = useState('')
    const [solve, setsolve] = useState([])

    //Solvw Complain
    const handleSolve = (id) => {
        const token = localStorage.getItem('token');
        axios.patch(`http://localhost:8081/lwresident/v1/complaint/solve/${id}`, {
            headers:{
                'Authorization': `Bearer ${token}`
              }
        })
        .then((res) => {
            fetchedData();
        })
        .catch(err => console.log("Error while solving complaint"));
    }

    //Delete Complaint
    const handleDelete = (id) => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:8081/lwresident/v1/complaint/delete/${id}`, {
            headers:{
                'Authorization': `Bearer ${token}`
              }
        })
        .then((res) =>{{
            setComplaints(complaints.filter(complaint => complaint.comid !== id))
        }})
        .catch((err)=> {
            console.log("didn't Delete data");
        })
    }

    //fetched all complaints
    const fetchedData = async(e) => {
        const token = localStorage.getItem('token');
        await  axios.get('http://localhost:8081/lwresident/v1/complaint/view-all', {
            headers:{
                'Authorization': `Bearer ${token}`
              }
        })
        .then(res => setComplaints(res.data))
        .catch(err => console.log("complaints can't fetched"));
    }

    useEffect(() => {
        fetchedData()
    }, [])


  return (
   <>
    <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
        <Sidebar />
        {/* Main Panel */}
        <div className="w-full lg:flex-1 p-2 ">
            {/* <Nav/> */}
            <h1 className='font-semibold text-gray-400 text-4xl py-4'>Raised Complaints</h1>
            <div className='md:px-12 px-3 pb-4 '>
                {/* Date filter input */}
                <div className='flex justify-end'>
                    <input
                        type="date"
                        value=''
                        onChange={(e) => setfilter(e.target.value)}
                        className="p-2 w-9 rounded-md my-4"
                    />
                </div>       
                {complaints.map((complaint) => ( 
                    <div  className="mx-auto  max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
                        <dl className="grid max-w-xl  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div key={complaint.comid} className="relative pl-16 border border-slate-500 p-4 rounded-lg">
                                <div className='flex justify-between'>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-2 top-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                            <PiHandPalmFill className='text-white w-8 h-8' />
                                            
                                        </div>
                                        {complaint.title}
                                        <p className='text-gray-400'>by {complaint.mem_id.name} <span className='text-blue-700 text-sm'>+91{complaint.mem_id.mobile}</span></p>
                                    </dt>
                                    <div className='flex text-center '>
                                        
                                        <MdOutlineDeleteOutline className='w-6 h-6 text-red-500'
                                        onClick={() => handleDelete(complaint.comid)}
                                        />
                                    </div>
                                </div>
                                <dd className="mt-2 text-base leading-7 bg-slate-200 rounded-lg p-1 text-gray-600">
                                    {complaint.description}
                                </dd>
                                <div className='flex justify-between mt-2 item-center'>
                                    <div className='flex items-center gap-2'>
                                        <p className=' bg-slate-400 text-[10px] px-[5px] rounded-full'>Wing:{complaint.mem_id.wing}</p>
                                        <p className=' bg-slate-400 text-[10px] px-[5px] rounded-full'>floor: {complaint.mem_id.flat}</p>
                                    </div>
                                    {complaint.status == 'PROGRESS' ? (
                                        <button className='bg-yellow-400 px-2 rounded-lg cursor-pointer text-white font-semibold shadow-lg hover:shadow-none hover:bg-yellow-500'
                                            onClick={() => handleSolve(complaint.comid)}>Solve</button>
                                    ) : (
                                        <button className='bg-gray-400 px-2 rounded-lg text-white font-semibold shadow-lg cursor-not-allowed'
                                            disabled>Solved</button>
                                    )}
                                </div>
                            </div>     
                        </dl>
                    </div>
                ))}
                   
            </div>
        </div>
    </div>
   </>
  )
}

export default AllComplaints