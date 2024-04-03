import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const  CreateMeetings = () => {

  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const [meetings, setmeetings] = useState([])
  const [conclusion, setconclusion] = useState(false)
  const [values, setvalues] = useState({
    agenda: '',
    date: '',
    time: '',
    conclusion: '',
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
    setloading(true)
    const token = localStorage.getItem('token')

    console.log(values);
    //submit meeting
    await axios.post('http://localhost:8081/lwresident/v1/meetings/create', values, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((res) => {
      setsuccess(true)
      setloading(false)
      setvalues({
        agenda: '',
        date: '',
        time: ''

      });
      console.log("Meeting Scheduled submited successfully");
    })
    .catch(err => console.log('Failed to submit', err));
  }

    //get meetings
    const fetchMeetings = async () => {
      
      const token = localStorage.getItem('token')
      await axios.get('http://localhost:8081/lwresident/v1/meetings/view-all',{
          headers: {
              'Authorization': `Bearer ${token}` 
            }
      })
      .then((res) => {
          setmeetings(res.data);
          console.log(res.data);       
      })    
      .catch((error)=> {
          console.error('Error fetching meetings:', error);
      }) 
      
  };

  //Fetched
  useEffect(() => {    
  fetchMeetings();
  }, []);


  //Conclusion
  const handleConclusion = async() => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post('http://localhost:8081/lwresident/v1/updateConclusion/id', {conclusion: values.conclusion}, {
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });
      if(response.ok){
        setconclusion(true)
        console.log('Conclusion Submited Successfully')
      }
    } catch (error) {
      console.log("Failed to submitted")
    }
  }

  //delete
  const handleDelete = async(id) => {
    const token = localStorage.getItem('token');
     await axios.delete(`http://localhost:8081/lwresident/v1/meetings/delete/${id}`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
     })
    .then(res => {
      setmeetings(meetings.filter(meet => meet.id !== id))
    })
  }
 
  return (
    <>
      <div>
        {loading && 
        <div className='h-screen bg-gray-600 opacity-10 flex justify-center items-center'>
          <p className='text-2xl font-semibold tracking-wider text-yellow-400'>Waiting for submission....</p>
          </div>}
        <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
            <Sidebar />
            {/* Main Panel */}
            <div className="w-full lg:flex-1 p-2 ">
                {/* <Nav/> */}
                <h1 className='font-semibold text-gray-400 text-4xl py-4'>Arrange Meetings</h1>
                <div className=' px-12 py-2 '>
                  {/*Arrange Meetings form*/}
                  {/* form */}
                  <form className='w-full h-auto p-3 rounded-md  bg-gradient-to-l  to-gray-200 from-gray-400 shadow-2xl'
                    onSubmit={handleSubmit}>
                      <div className='flex items-center justify-between'>
                        <h2 className="text-black text-lg font-medium title-font mb-5">Schedule meeting</h2> 
                        <div className='flex gap-3'>
                          <input 
                            onChange={handlechange} 
                            value={values.date}
                            type="date"  
                            name="date" 
                            className=" h-10 w-10 bg-gray-600 bg-opacity-20 focus:bg-gray-600 focus:bg-opacity-20 rounded-full border border-gray-600 focus:border-yellow-300 text-base outline-none text-gray-100 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          <input 
                            onChange={handlechange}
                            value={values.time}
                            type="time"  
                            name="time" 
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

                  {/* Meetings */}
                  <div className='px-4'>
                    <div  className="relative overflow-x-auto pt-10 ">
                        <table  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead  className="text-xs text-gray-700 uppercase bg-gray-200 sticky top-0">
                                <tr>
                                    <th  className="px-6 py-3">
                                        ID
                                    </th>
                                    <th  className="px-6 py-3">
                                        Agenda
                                    </th>
                                    <th  className="px-6 py-3">
                                        Date
                                    </th>
                                    <th  className="px-6 py-3">
                                        Time
                                    </th>
                                    <th  className="px-6 py-3">
                                        Conclusion
                                    </th>
                                    <th  className="px-6 py-3">
                                        <span  className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='h-[10rem]'>
                              {meetings.map((meeting) =>(
                                <tr key={meeting.meetingid} className="bg-white border-b">
                                    <th className="px-6 py-4 font-semibold text-lg text-yellow-400 whitespace-nowrap">
                                        {meeting.meetingid}
                                    </th>
                                    <td  className="px-6 py-4 text-black">
                                        {meeting.agenda}
                                    </td> 
                                    <td  className="px-6 py-4 text-black">
                                        {meeting.date}
                                    </td>
                                    <td  className="px-6 py-4 text-black">
                                        {meeting.time}
                                    </td>
                                    <td  className="px-6 py-4 text-black">
                                        <button className='text-sky-500 hover:text-gray-600 bg-gray-300 p-1 rounded-md'
                                              onClick={() => setconclusion(true)}> Conclusion</button>
                                    </td>
                                    <td  className="px-6 py-4 text-right cursor-pointer">
                                      <FontAwesomeIcon onClick={() => handleDelete(meeting.meetingid)} icon={faTrash} size="lg" style={{ color: "#f66151" }} />    
                                    </td>
                                </tr>
                              ))}
                            </tbody>
                        </table>
                    </div>

                    {/* conclusion */}
                    {conclusion && (
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                          <div className="bg-white p-10 rounded-md shadow-lg flex flex-col gap-2">
                            {/* cancle */}
                            <div className='flex justify-end cursor-pointer'>
                              <p className='text-2xl text-white bg-sky-500 rounded-full p-[1px] w-8 text-center' onClick={() => setconclusion(false)}>x</p>
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Conclusion Form</h2>
                            <textarea type='text'
                                  name='conclusion'
                                  onChange={handlechange}
                                  value={values.conclusion}
                                  required
                                  placeholder='Enter Conclusion'
                                  className='p-2 rounded-md '/>
                            {/* Your conclusion form inputs go here */}
                            <button onClick={handleConclusion}
                                    type='submit'
                                   className="bg-sky-500 text-white px-4 py-2 w-24 rounded-md">Submit</button>
                          </div>
                          </div>
                        )} 
                  </div>
             </div>
          </div>
      </div>
    
    </>
  )
}

export default CreateMeetings