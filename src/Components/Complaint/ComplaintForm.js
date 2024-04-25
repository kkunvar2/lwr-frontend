import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import readImage from '../../Services/readImage'


const ComplaintForm = () => {

    const [image, setImage] = useState(null)

    const navigate = useNavigate();
    const form = useRef();
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    //image change
    const fileChange = async (e) => {
        const imageString = await readImage(e.target.files[0]);
        console.log(imageString);
        setImage(imageString);
    }

    //submiting form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            const formData = new FormData(form.current);

            //append Data
            // formData.append('title', values.title)
            // formData.append('description', values.description)

            if(image){
                formData.append('photo', image);
            }
            
            const response = await fetch('http://localhost:8081/lwresident/v1/complaint/newComplaint', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: formData,
            });
            if (response.ok) {
                setImage(null)
                navigate('/complaintTab')
                console.log('Complaint registered successfully');
            } else {
                console.error('Failed to register complaint');
            }
        } catch (error) {
            console.error('Error registering complaint');
        }
        console.log(values);
    }



    const handlechange = (e) => {
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
                        <div className='flex justify-center '>
                    <Link to='/dash'>
                        <button  className='bg-white p-3 rounded-full text-black font-semibold shadow-lg shadow-gray-600'>Go Back</button>
                    </Link>
                </div>
                    </div>

                    <form className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                        onSubmit={handleSubmit}
                        ref={form}>
                        <h2 className="text-white text-lg font-medium title-font mb-5">Form</h2>
                        <div className='flex items-center justify-center w-full'>
                            {!image ? (
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 mb-4 text-gray-500"
                                        >
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                                            <line
                                                x1="16"
                                                x2="22"
                                                y1="5"
                                                y2="5"
                                            />
                                            <line
                                                x1="19"
                                                x2="19"
                                                y1="2"
                                                y2="8"
                                            />
                                            <circle cx="9" cy="9" r="2" />
                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                        </svg>
                                        <p className="mb-2 text-sm text-blue-500 ">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                        </p>
                                    </div>
                                </label>
                            ) : (
                                <div className="relative flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#a30000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="z-10"
                                            onClick={() => {
                                                setImage(null);
                                                form.current[0].value =
                                                    null;
                                            }}
                                        >
                                            <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                                            <line
                                                x1="16"
                                                x2="22"
                                                y1="5"
                                                y2="5"
                                            />
                                            <circle cx="9" cy="9" r="2" />
                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                        </svg>
                                    </div>
                                    <img
                                        src={image}
                                        className="absolute w-full h-full rounded-xl object-contain object-center opacity-40"
                                        alt=""
                                    />
                                </div>
                            )}
                                <input
                                    id='dropzone-file'
                                    type="file"
                                    className="hidden"
                                    name="photo"
                                    onChange={fileChange}
                                    accept="image/*"
                                    />
                            </div>

                        {/* Name */}
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-400">Title</label>
                            <input
                                onChange={handlechange}
                                value={values.title}
                                type="text"
                                name="title"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                            type='submit'>Raise</button>
                        <p className="text-xs mt-3">Contact Secretary <span className='text-blue-400'>+91*******78</span></p>
                    </form>
                </div>
                
            </section>
        </>
    )
}

export default ComplaintForm