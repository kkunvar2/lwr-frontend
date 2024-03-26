import React, { useState } from 'react'

const MemEvent = () => {

  const events = ["Birthday", "Engagement", "Party"];

  const [values, setvalues] = useState({
    type: '',
    startDate: '',
    endDate: '',
    check: false,
    book: false
  })

  
  //Getting Today
  const today = new Date().toISOString().split('T')[0];


  const handleSubmit = (e) =>{
    e.preventDefault()

    // Calculate total day
    const start = new Date(values.startDate);
    const end = new Date(values.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);
    
    // Update state with total days
      setvalues({
        ...values,
        totalDays: diffDays,
        book: values.check && values.type !== '' && values.startDate !== '' && values.endDate !== '', //if empty getting disabled automatically
        type: '',
        
      });

      console.log(values)
}

  const handleCheck = () => {
    // logic for getting book value true
    setvalues({
      ...values,
      check: true
    });


  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setvalues({
        ...values,
        [name]: value,
    });
}



return (
  <>
    <section className=' bg-gray-900 h-auto md:h-screen'>
      <div className='flex flex-col px-4 py-24 gap-16'>
        {/* form */}
        <form  onSubmit={handleSubmit} className='lg:w-[45%] md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-[100%] mt-10 md:mt-0'>
            <div className='flex items-center justify-between'>
              <h2 className="text-white text-lg font-medium title-font mb-5">Book Event</h2> 
            </div>

            {/* type */}
            <div className="flex max-md:flex-col max-lg:flex-row mb-5  gap-3 ">
                <div className='w-[60%]'>
                  <label className="leading-7 text-lg text-gray-400">Type: </label>
                  <select className='max-lg:w-[95%] lg:ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                          onChange={handlechange}
                          value={values.type}
                          name="type"  >
                            <option className='bg-gray-600 font-normal mb-3' >Select a Event</option>
                                {
                                  events.map((event, i) => {
                                    return <option key={i} value={event} className='bg-gray-600 text-yellow-500'>{event}</option>
                                  })
                                }
                            <option className='bg-gray-600 text-white' value='Other'><input className='text-white' type='text' placeholder='Other'/>Other</option>
                  </select>
                </div>
                {values.type === "Other" && ( // Conditionally render input box if "Other" is selected
                <input
                  type="text"
                  placeholder='Enter other type'
                  name="otherType="
                  value={values.otherType}
                  onChange={handlechange}
                  className='w-[45%] max-md:w-[90%] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 px-3 leading-8 transition-colors duration-200 ease-in-out"'
                />
              )}
            </div>

            {/* Date */}
            <div className="flex flex-col xl:flex-row md:justify-between gap-2 mb-8">
              <div className='flex flex-col mb-4 sm:mb-0'>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">Start Date:</label>
                <input 
                    onChange={handlechange} 
                    value={values.startDate}
                    type="date"  
                    name="startDate" 
                    min={today}
                    className="w-full 2xl:w-[20rem] xl:w-[12rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className='flex flex-col'>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">End date:</label>
                <input 
                    onChange={handlechange} 
                    value={values.endDate}
                    type="date"  
                    name="endDate"
                    min={today} 
                    className="w-full 2xl:w-[20rem] xl:w-[12rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            
            {/* Total */}
            <div className='flex justify-between lg:items-center flex-col lg:flex-row gap-10'>
              <div className='flex flex-col gap-2 items-start'>
                <button  className='text-white bg-yellow-500 border-0 py-2 px-2 w-42 focus:outline-none hover:bg-yellow-600 rounded text-lg'
                        onClick={handleCheck}
                        type='submit'>
                        Check Avaibility
                </button>
                
                <button  className={`text-white bg-blue-500 border-0 py-2 px-0 w-20 focus:outline-none hover:bg-blue-600 rounded text-lg ${!values.book && 'opacity-50 cursor-not-allowed'}`}
                        disabled={!values.book}
                        type='submit' >
                        Book
                </button>
              </div>
              
              <h2 className='text-white'>Total Days: <span className=' text-yellow-500'>{values.totalDays}</span></h2>
            </div>
          </form>
          {/* Tab */}
          <div className='lg:w-[45%]'>
              
          </div>
        </div>
    </section>
    </>
  )
}


export default MemEvent