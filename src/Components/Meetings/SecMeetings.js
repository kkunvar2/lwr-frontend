import React from 'react'
import Nav from '../Nav'

const   SecMeetings = () => {
  return (
    <>
      <div className='h-screen bg-gray-900'>
        <Nav/>
        {/* Heading */}
        <div className='p-3'>
        <h4 className='md:text-4xl text-2xl text-gray-700 font-semibold'>Schedule the <span className='text-yellow-500'>Meetings</span></h4>
        
        {/* form */}
        <form   className='lg:w-[45%] md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-[100%] mt-10 md:mt-0'>
            <div className='flex items-center justify-between'>
              <h2 className="text-white text-lg font-medium title-font mb-5">Book Event</h2> 
            </div>

            {/* type */}
            <div className="flex max-md:flex-col max-lg:flex-row mb-5  gap-3 ">
                <div className='w-[60%]'>
                  <label className="leading-7 text-lg text-gray-400">Type: </label>
                  
                </div>
             
                <input
                  type="text"
                  placeholder='Enter other type'
                  name="otherType="
                  value=''
                  onChange=''
                  className='w-[45%] max-md:w-[90%] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 px-3 leading-8 transition-colors duration-200 ease-in-out"'
                />
              
            </div>

            {/* Date */}
            <div className="flex flex-col xl:flex-row md:justify-between gap-2 mb-8">
              <div className='flex flex-col mb-4 sm:mb-0'>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">Start Date:</label>
                <input 
                    onChange='' 
                    value=''
                    type="date"  
                    name="startDate" 
                    
                    className="w-full 2xl:w-[20rem] xl:w-[12rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className='flex flex-col'>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">End date:</label>
                <input 
                    onChange=''
                    value=''
                    type="date"  
                    name="endDate"
                    className="w-full 2xl:w-[20rem] xl:w-[12rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            
            {/* Total */}
            <div className='flex justify-between lg:items-center flex-col lg:flex-row gap-10'>
              <div className='flex flex-col gap-2 items-start'>
                <button  className='text-white bg-yellow-500 border-0 py-2 px-2 w-42 focus:outline-none hover:bg-yellow-600 rounded text-lg'
                        onClick=''
                        type='submit'>
                        Check Avaibility
                </button>
                
                <button  className={`text-white bg-blue-500 border-0 py-2 px-0 w-20 focus:outline-none hover:bg-blue-600 rounded text-lg }`}
                        disabled=''
                        type='submit' >
                        Book
                </button>
              </div>
              
              <h2 className='text-white'>Total Days: <span className=' text-yellow-500'></span></h2>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SecMeetings