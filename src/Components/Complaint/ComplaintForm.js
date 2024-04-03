import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const ComplaintForm = () => { 

    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        description: ''
    })
    
    //submiting form
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:8081/lwresident/v1/complaint/newComplaint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                navigate('/complaintTab')
                console.log('Complaint registered successfully');
            } else {
                console.error('Failed to register complaint');
            }
        } catch (error) {
            console.error('Error registering complaint:', error);
        }
        console.log(values);
    }
    
    const handlechange = (e) =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    return (
    <>
    <section className=" h-screen text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-white">Have you any Problem? freely raise your complaint</h1>
            <p className="leading-relaxed mt-4">Complaints are related to our Residential like parking, resident members, your personal problem. we are try our best. <span className='text-yellow-500'>Have great day</span> </p>
            </div>
            
            <form className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                  onSubmit={handleSubmit}>
            <div className='flex items-center justify-between'>
                <h2 className="text-white text-lg font-medium title-font mb-5">Form</h2> 
            </div>
            
            {/* Name */}
            <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Title</label>
                <input 
                    onChange={handlechange} 
                    value={values.title}
                    type="text"  
                    name="title" 
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            
            {/* Type */}

            {/* Description */}
            <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Description</label>
                <input 
                onChange={handlechange}
                value={values.description} 
                type="text"  
                name="description" 
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            
            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Raise</button>
            <p className="text-xs mt-3">Contact Secretary <span className='text-blue-400'>+91*******78</span></p>
            </form>
        </div>
        <div className='flex justify-center '>
            <Link to='/dash'>
                <button className='bg-white p-3 rounded-full text-black font-semibold shadow-lg shadow-gray-600'>Go Back</button>
            </Link>
        </div>
    </section>  
    </>
  )
}

export default ComplaintForm