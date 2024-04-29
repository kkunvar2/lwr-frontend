import React from 'react'

const Promote = () => {

  return (
    <>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div className="absolute flex items-center justify-center h-screen transition-opacity duration-100">
            
            <div className="max-w-xs overflow-hidden bg-gray-800 rounded-lg shadow-xl mb-24">
                <div className="px-6 py-4 bg-gradient-to-r from-sky-400 to-sky-200 flex flex-col justify-center ">
                    <h2 className="text-2xl font-semibold text-gray-100">Select Role</h2>

                    <div className='flex gap-4 mb-2'>

                    <input type="radio" 
                     name="secretory" 
                     value="secretory" 
                     className="hidden peer" 
                    />

                    <label className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div className="block">
                            <div className="w-full text-lg font-semibold">SECRETORY</div>
                        </div>
                    </label>    

                    <input type="radio"
                      name="committee"
                      value="committee"
                       className="hidden peer"/>

                    <label className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        
                        <div className="block">
                            <div className="w-full text-lg font-semibold">COMMITTEE</div>
                        </div> 
                    </label>
                    </div>
                   

                    <button className='bg-gray-600 py-1 px-2 rounded-lg text-white font-medium text-sm tracking-wider'
                    type='submit'>Send Request</button>                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Promote