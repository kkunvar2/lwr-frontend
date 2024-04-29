import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NoticeBoard = ({setshowNoticeboard, open}) => {

    const [noticeboard, setnoticeboard] = useState([])

    const fetchNotice = async() => {
        try{
           const res = await axios.get("http://localhost:8081/lwresident/v1/notice-board/view")
           if(res.status === 200){
            setnoticeboard(res.data)
           }
        }
        catch(err){
            console.log("Notice Didn't fetched");
        }
    }

    useEffect(() => {
        fetchNotice()
    }, [])
    
    return (
        <>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div className="absolute flex items-center justify-center h-screen transition-opacity duration-100">
            
                <div className="max-w-xs overflow-hidden bg-gray-800 rounded-lg shadow-xl mb-24">
                    <div className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-200">
                        <h2 className="text-2xl font-semibold text-gray-100">Noticeboard</h2>
                        <p className="text-gray-800">Perfect for professionals</p>
                    </div>
                    {noticeboard.map((note) => (
                    <div key={note.note_id}>
                            <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-200">{note.title}</div>
                        <p className="text-gray-500">for trip</p>
                    </div>
                        <div className="px-6 py-4">
                            <ul className="text-gray-600">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {note.description}
                            </li>
                        
                            </ul>
                        </div>
                    </div>
                    
                    ))}
                    <div className="px-6 pt-4 pb-6">
                    <a className="block w-full px-4 py-2 font-semibold text-center text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:bg-black focus:outline-none" 
                    onClick={() => setshowNoticeboard(false)}>Close</a>
                    </div>
                
                </div>
        </div>
        </>
    )
}

export default NoticeBoard