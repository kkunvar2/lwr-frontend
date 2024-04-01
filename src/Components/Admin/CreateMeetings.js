import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
const  CreateMeetings = () => {

  const [success, setsuccess] = useState(false)
  const [values, setvalues] = useState({
    agenda: '',
    meetdate: '',
    meettime: ''
  })

  const handlechange = (e) => {
    const {name, value} = e.target;
    setvalues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    const response = await axios.post('http://localhost:8081/lwresident/v1/', values, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      setsuccess(true)
      setvalues({
        agenda: '',
        meetdate: '',
        meettime: ''

      });
      console.log("Meeting Scheduled submited successfully");
    })
    .catch(err => console.log('Failed to submit', err));
  }
  useEffect(() =>{

  },[])
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
            <Sidebar />
            {/* Main Panel */}
            <div className="w-full lg:flex-1 p-2 ">
                {/* <Nav/> */}
                <h1 className='font-semibold text-gray-400 text-4xl py-4'>Arrange Meetings</h1>
                <div className=' px-12 py-10 '>
                    {/*Arrange Meetings form*/}
                    {/* form */}
                    <form className='w-full h-auto p-3 rounded-md  bg-gradient-to-l  to-gray-200 from-gray-400 shadow-2xl'
                    onSubmit={handleSubmit}>
                      <div className='flex items-center justify-between'>
                        <h2 className="text-black text-lg font-medium title-font mb-5">Schedule meeting</h2> 
                        <div className='flex gap-3'>
                          <input 
                            onChange={handlechange} 
                            value={values.meetdate}
                            type="date"  
                            name="meetdate" 
                            className=" h-10 w-10 bg-gray-600 bg-opacity-20 focus:bg-gray-600 focus:bg-opacity-20 rounded-full border border-gray-600 focus:border-yellow-300 text-base outline-none text-gray-100 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          <input 
                            onChange={handlechange}
                            value={values.meettime}
                            type="time"  
                            name="meettime" 
                            className="h-10 w-14 bg-gray-600 bg-opacity-20 focus:bg-gray-600 focus:bg-opacity-20 rounded-full border border-gray-600 focus:border-yellow-300 text-base outline-none text-gray-100 pr-4 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      
                      {/* Agenda */}
                      <div className=''>
                      <input
                              type="text"
                              placeholder='Meeting Agenda'
                              name="agenda"
                              value={values.agenda}
                              onChange={handlechange}
                              required
                              className="w-[45%] max-md:w-[90%] text-black bg-gray-600 bg-opacity-20 focus:bg-gray-600  focus:bg-opacity-20 rounded border border-gray-600 focus:border-yellow-300 text-base outline-none  px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                      </div>

                      <div className='p-2 flex justify-between items-center'>
                        {success && 
                        <div className=' bg-gray-300 shadow-inner p-1 rounded-md font-semibold text-lg text-green-500 tracking-wide outlinr'>Meeting Scheduled</div>}
                        <div></div>
                        <button className='p-3 bg-yellow-400 hover:bg-slate-800 text-white font-medium shadow-xl rounded-md'
                              type='submit'>Submit</button>
                      </div>
                    </form>
                  </div>
             </div>
          </div>
      </div>
    
    </>
  )
}

export default CreateMeetings