import axios from 'axios';
import React, { useState } from 'react'

const AddNotice = () => {

    const [notice, setNotice] = useState({
        title: "Get Ready",
        description: "for trip"
      });

      //Submiting
      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:8081/v1/lwresient/createNotice', notice, {
            headers: {
                'Authorization': `Bearer ${token}`               
            }
        })
      }
  return (
    <>
    <div className='flex items-center justify-center h-screen '>
            <div className="max-w-xs overflow-hidden bg-gray-800 rounded-lg shadow-xl">
                <div className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-200">
                    <h2 className="text-2xl font-semibold text-gray-100">Noticeboard</h2>
                    <p className="text-gray-800">Perfect for professionals</p>
                </div>
                <div className="px-6 py-4">
                    <div className="text-4xl font-bold text-gray-200">Get Ready</div>
                    <p className="text-gray-500">for trip</p>
                </div>
                <div className="px-6 py-4">
                    <ul className="text-gray-600">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        We all have to ready for trip Bus will leave at sharp 8:00am  
                    </li> 
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddNotice