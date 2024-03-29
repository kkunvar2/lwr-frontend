import React from 'react'
import Sidebar from './Sidebar'
import Nav from '../Nav'

const Approval = () => {
  return (
    <>
        <div>
            <div className="flex flex-col lg:flex-row bg-gray-900 min-h-screen">
                <Sidebar />
                {/* Main Panel */}
                <div className="w-full lg:flex-1 p-2 ">
                    <Nav/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Approval