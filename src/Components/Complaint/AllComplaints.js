import React, { useState } from 'react'
import Sidebar from '../Admin/Sidebar'
import { PiHandPalmFill } from "react-icons/pi";

const AllComplaints = () => {
    const [complaints, setComplaints] = useState([])
    const [filter, setfilter] = useState('')


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
                {complaints.map((complaint, index) => (    
                    <div  className="mx-auto  max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div key={index} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                                            <PiHandPalmFill className='text-white w-8 h-8' />
                                    </div>Customized Coverage Plans
                                </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">Tailor your insurance coverage to match your unique needs.
                                Our customizable plans ensure you only pay for the coverage that matters most to you.</dd>
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