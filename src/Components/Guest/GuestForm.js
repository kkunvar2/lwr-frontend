import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestForm = () => {

    const navigate = useNavigate();

    const wings = ['A', 'B', 'C', 'D'];
    const [formdata, setFormdata] = useState({
        name: '',
        mobile: '',
        wing: '',
        flat:'',
        purpose:'',
    })
    const floors = {
        'A': ['101', '102', '103', '104', '105'],
        'B': ['201', '202', '203', '204', '205'],
        'C': ['301', '302', '303', '304', '305'],
        'D': ['401', '402', '403', '404', '405']
    };
  
    const [selwing, setSelWing] = useState('');
    const [selfloor, setSelFloor] = useState('');

    const handleCheckIn = () => {

        fetch('http://localhost:8080/api/v1/guest-user/check-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then((res) => {
            if(res.ok){
                console.log("checked In Successfully");
                navigate("/guestreport")
                return res.json();
            }else{
                console.log(res)
                // throw new Error('Failed to check in');
            }
        })
        
    }
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const handleWing = (e) => {
        setFormdata({ ...formdata, wing: e.target.value });     
    };
  
    const handleFloor = (e) => {
        setFormdata({ ...formdata, flat: e.target.value });      
    };

  return (
    <>
      <div className='flex justify-center items-center '>
        <form onSubmit={handleCheckIn} className=' drop-shadow-xl max-w-[40rem] w-full md:h-[28rem] py-5 bg-slate-100 rounded-xl flex justify-center items-center flex-col gap-4'>
            
            <div className='flex justify-between items-center gap-32 mb-4'>
                <div className='flex'> <span className='text-2xl font-bold text-sky-500'>L</span>/ <span className='text-2xl font-bold text-yellow-500'>W</span> </div>
            </div>
                
                {/* Inputs */}
                <div className='flex flex-row flex-wrap gap-3 justify-center'>
                    <input className=' md:w-auto rounded-full p-3'
                        type='text' 
                        placeholder='Name'
                        name='name'
                        value={formdata.name}
                        onChange={handleChange} />

                    <input className=' md:w-auto rounded-full p-3'
                        type='tel' 
                        placeholder='Phone Number'
                        name='mobile'
                        value={formdata.mobile}
                        onChange={handleChange}/>
                </div>
                {/* purpose */}
               
                {/* Flat & wing */}
                <div className='dropdown px-10 mt-6'>
                <div className='menu-field flex flex-col gap-2 md:flex-row'>
                    <label className="bg-blue-100 text-blue-500 text-sm font-normal  px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Wing:</label>
                    <select onChange={handleWing}>
                        <option value="">Select a Wing</option>
                        {wings.map((wing, index) => (
                            <option key={index} value={wing}>{wing}</option>
                        ))}
                    </select>
                </div>
                <div className='menu-field flex flex-col gap-2 md:flex-row'>
                    <label className="bg-blue-100 text-blue-500 text-sm font-normal  px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Floor:</label>
                    {formdata.wing && (
                        <select onChange={handleFloor}>
                            <option value="">Select a Floor</option>
                            {floors[formdata.wing].map((floor, index) => (
                                <option key={index} value={floor}>{floor}</option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
                {/* Check in */}
                <button className='flex items-center bg-sky-500 px-9 py-2 mt-7 rounded-full text-white font-normal'
                        type='submit'>
                    Check In
                    {/* <img src='' alt="Next Icon" className=" ml-3 w-6 h-6"/> */}
                    </button>
            </form>
        </div>      
    </>
  )
}

export default GuestForm