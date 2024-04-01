import React, { useRef, useState } from 'react'
import bg from "../Assests/img_2.jpg"

const Feed = () => {

    const form = useRef(null)
    const [error, seterror] = useState(null)
    const [success, setsuccess] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const feed = Object.fromEntries(formData.entries())

        console.log(feed);
        
        const response = await fetch('http://localhost:8081/lwresident/v1/auth/feedback',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(feed)
        })
        
        if(response.ok) {
            setsuccess("Feedback SuccessFully Submited")
            setTimeout(() => {
                setsuccess("");
            }, 2000)
        }
    
        const data = await response.json()
        if(data?.error){
            seterror(data.error)
            return
        }
        form.current.reset()
    }
  return (
    <>
        <div className='bg-gray-100'>
            <div className='flex w-full min-h-screen justify-center items-center bg-gray-800'>
                <div className=' bg-cover bg-center h-[50rem] flex flex-col justify-center gap-24 md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full p-8 sm:p-20 rounded-xl shadow-lg text-white'
                     style={{backgroundImage: ` linear-gradient(to bottom , rgba(37, 157, 212, 0.486), rgba(19, 20, 20, 0.856)), url(${bg})`}}>
                    {/* Title */}
                    <div className=' flex flex-col justify-center'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wider'>Feedback Form</h1>
                            <p className=' p-2 text-yellow-500 font-light text-sm tracking-wider'>Please provide your valuable feedback.....</p>
                        </div>
                    </div>
                    {/* Form */}
                    <div >
                         <div className='md:mt-12 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-90 '>
                            {success && 
                                <div className='w-20 h-20 bg-white flex justify-center items-center'>
                                    <h1 className='font-bold text-green-600 tracking-wider'>{success}</h1>
                                </div>
                            }
                            <form className='flex flex-col space-y-4'
                            onSubmit={handleSubmit} ref={form}>
                                {/* name */}
                                <div>
                                    <label className='text-sm'>Your name</label>
                                    <input type='text'
                                           name='name'
                                           placeholder='Your name' 
                                           className=' mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-200'/>
                                </div>
                                
                                {/* mail */}
                                {/* <div>
                                    <label className='text-sm'>Email</label>
                                    <input type='text' 
                                           name='email'
                                           placeholder='email address' 
                                           className=' mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-200'/>  
                                </div> */}
                              
                                {/* Description */}
                                <div>
                                    <label className='text-sm'>Message</label>
                                    <textarea type='text' 
                                           name='description'
                                           placeholder='Message...' 
                                           rows={4}
                                           className=' mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-200'/>  
                                </div>
                                
                                <button className=' inline-block self-end bg-cyan-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
                                        type='submit'>
                                    Send Message
                                </button>
                            </form>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Feed


