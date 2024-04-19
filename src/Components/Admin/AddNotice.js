import axios from 'axios';
import React, { useState } from 'react'

const AddNotice = ({setshow}) => {

    const [notice, setNotice] = useState({
        title: "",
        subtitle: "",
        description: ""
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        setNotice(prevNotice => ({
            ...prevNotice,
            [name]: value
        }));
      }


      //Submiting
      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.put('http://localhost:8081/v1/lwresient/createNotice', notice, {
            headers: {
                'Authorization': `Bearer ${token}`               
            }
        })
        .then ((res) => {
            console.log("Notice Submitted");
        })
        .catch(err => console.log("erro while submit notice"))
      }

      //clear Form 
      const handleClear = () =>{
        
      }
  return (
    <>
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
    <div className='absolute inset-0 flex items-center justify-center'>
    <div className='flex items-center justify-center '>
            <form onSubmit={handleSubmit} className=" max-w-xs overflow-hidden bg-gray-800 rounded-lg shadow-xl">
                <div className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-200">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-semibold text-gray-100">Noticeboard</h2>
                        <p className='font-bold cursor-pointer'
                        onClick={() => setshow(false)}>x</p>
                    </div>
                    <p className="text-gray-800">Perfect for professionals</p>
                </div>
                <div className="px-6 py-4">
                <input
                    name="title"
                    placeholder='Title'
                    value={notice.title}
                    onChange={handleChange}
                    className="text-3xl font-bold text-gray-200 bg-transparent w-full border-none focus:outline-none resize-none"
                />
                <input
                    name="subtitle"
                    placeholder='Sub title'
                    value={notice.subtitle}
                    onChange={handleChange}
                    className="text-gray-500 bg-transparent border-none focus:outline-none resize-none"
                />
                </div>
                <div className="px-6 py-4">
                    <ul className="text-gray-600">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>

                        <textarea
                            name="description"
                            placeholder='Description'
                            value={notice.description}
                            onChange={handleChange}
                            className="text-gray-500 bg-transparent border-none focus:outline-none "
                         />
                    </li> 
                    </ul>
                </div>

                <div className="px-6 pt-4 pb-6 flex justify-between item-center gap-4">
                <button className="block w-full px-4 py-2 font-semibold text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:bg-black focus:outline-none" 
                    type='submit'>
                        Submit</button>
                <button className="block w-full px-4 py-2 font-semibold text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:bg-black focus:outline-none"
                    onClick={handleClear}>
                        Clear</button>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default AddNotice