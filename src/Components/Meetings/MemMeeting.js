import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MemMeeting = () => {
    const [show, setshow] = useState(true)
    const [meetings, setmeetings] = useState([])
    // const [loading, setloading] = useState(true)


    const fetchMeetings = async () => {
            const token = localStorage.getItem('token')
            await axios.get('http://localhost:8081/lwresident/v1/meetings/view',{
                headers: {
                    'Authorization': `Bearer ${token}` 
                  }
            })
            .then((res) => {
                setmeetings(res.data);
                console.log(res.data);
                // setloading(false);
                setshow(Array(res.data.length).fill(false));
            })    
            .catch((error)=> {
                console.error('Error fetching meetings:', error);
                // setloading(false);
            }) 
            
    };

    //Fetching
    useEffect(() => {    
        fetchMeetings();
    }, []);

   // Toggle conclusion for a specific meeting
    const toggle = (index) => {
        setshow(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handlesearch = (e) =>{
        const searchdate = e.target.value;

        const filter = meetings.filter((meet) => {
            meet.date.includes(searchdate)
        })
        setmeetings(filter)
    }
  return (
    <>
        <div className='h-screen bg-gray-900'>
            {/* HEADINGS */}
            <div className='flex justify-around items-center pt-5 '>
                <div>
                    <h4 className='md:text-5xl text-2xl text-gray-700 font-semibold'>Your <span className='text-yellow-500'>Meetings</span></h4>
                </div>
                <div className="relative md:-right-24">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input className="block md:w-auto w-[10rem] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                        type="search" 
                        placeholder="Search Date...."
                        onChange={handlesearch} 
                        />
                </div>
            </div>

            {/* Meeting lists */}
            <div className='grid grid-cols-1 md:grid-cols-4 mt-5 px-5 gap-3'>
            {/* Card 1 */}
            {meetings.map((meeting, index) =>(
                <div className="relative max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    key={index}>
                    <div className='flex justify-between item-center'>
                        <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{meeting.agenda}</h5>
                        <p className=" text-xl font-bold text-yellow-500 dark:text-gray-400 mt-1">{meeting.meetingid}</p>
                    </div>
                    <div className='flex item-center mt-2'>
                        <div className='flex flex-col'>
                            <p className=" font-normal text-gray-500 dark:text-gray-400">Date: <span className='text-slate-800'>{meeting.date}</span></p>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Time: <span className='text-slate-800'>{meeting.time}</span></p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end -mt-6 mb-2'>
                            <a href="#" onClick={() => toggle(index)}className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                Conclusion
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                </svg>
                            </a>
                    </div>
                    {/* Conclusion */}
                    {show[index] && 
                    <div className='flex flex-col relative max-w-sm p-2 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <h3 className='text-yellow-500 text-lg font-bold italic'>
                                Conclusion 
                        </h3>
                        <div>
                            <p>{meeting.conclusion}</p>
                        </div>
                    </div> }    
                </div>             
            ))}
            
            {/* card 2 */}
               
        </div>
                  
    </div>
    
    </>
  )
}

export default MemMeeting