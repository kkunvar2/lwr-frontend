import React from 'react'
import Sidebar from './Sidebar'
import Nav from '../Nav'

const Approval = () => {
  return (
    <>
        <div>
            <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
                <Sidebar />
                {/* Main Panel */}
                <div className="w-full lg:flex-1 p-2 ">
                    {/* <Nav/> */}
                    <h1 className='font-semibold text-gray-400 text-4xl py-4'>Confirm Approval</h1>
                    <div className=' px-16 py-12 '>
                        {/* Approval */}
                        <div className='grid grid-col-1'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Approval