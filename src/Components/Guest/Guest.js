import React from 'react'
import GuestForm from './GuestForm'
import { Link } from 'react-router-dom'

const Guest = () => {
  return (
    <>
         <div className=' h-screen lg:h-[50rem] bg-slate-800 pb-2'> 
         {/* navbar */}
         
          {/* Guest User */}
         <div className='ml-10'>
            <h1 className="text-5xl text-yellow-500 font-extrabold dark:text-white">WELCOME Guard <small className="ms-2 text-3xl font-medium text-gray-500 dark:text-gray-400">Please fill this form for our security purpose</small></h1>
        </div>

        {/* Check In Form */}
        <div className='mt-20'>
            <GuestForm />
        </div>
        {/* Cards */}
        <div className='xl:flex  mt-5 gap-2 px-12 lg:float-right'>
        <Link to='/guestreport'><div className='lg:w-40 h-20 bg-gradient-to-l from-red-500 to-transparent flex items-center justify-center rounded-lg text-white font-semibold cursor-pointer transform transition duration-300  hover:scale-105'>
            Go CheckOut
          </div></Link>
          <Link to='/guestrecords'><div className=' max-lg:mt-2 lg:w-40 h-20 bg-gradient-to-l from-sky-500 to-transparent  flex items-center justify-center rounded-lg text-white font-semibold cursor-pointer transform transition duration-300  hover:scale-105'>
            Records
          </div>
          </Link>
        </div>

    </div>
    </>
  )
}

export default Guest