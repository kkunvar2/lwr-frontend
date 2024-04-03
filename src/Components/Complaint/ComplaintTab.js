import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ComplaintTab = () => {
    
    //Get data
    const [complaints, setComplaints] = useState([]);
    const [selType, setselType] = useState('')
    const [title, settitle] = useState('')
    const [error, seterror] = useState(null)

    useEffect(() => {
      const token = localStorage.getItem('token');
      fetch('http://localhost:8081/lwresident/v1/complaint/my-complaints', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
        .then(response => response.json())
        .then(data =>{
          setComplaints(data) 
          seterror(null);
        }) 
        .catch(error => {
          console.error('Error fetching data:', error);
          seterror("Failed to fetch data")  
        })
      },[]);

    //Filter Complaints
    const filter = complaints.filter(complaint => {
    if (!selType && !title) return true; 
    if (complaint.status === selType) return true;
    if (title && complaint.title.toLowerCase().includes(title.toLowerCase())) return true; 
    
    return false;
  });

  //Delete Complaints
  const handleDelete = async(id) =>{
    const token = localStorage.getItem('token');
     await axios.delete(`http://localhost:8081/lwresident/v1/complaint/delete/${id}`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
     })
    .then(res => {
      setComplaints(complaints.filter(complaint => complaint.comid !== id))
    })
  }
  
    return (
    <>
        <div className='h-screen bg-gray-900'>
            <h1 className=' text-5xl mb-5 ml-3 font-medium text-gray-700'>Your Complaints Records</h1>
              {/* filtering */}
              <div className='flex justify-end px-3 mb-2'>
                 <select  className='max-lg:w-[45%] lg:ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        name='type'
                        onChange={(e) => setselType(e.target.value)}
                        >
                    <option className='bg-gray-800'>Status</option>
                    <option className='bg-gray-800 font-medium text-sm text-yellow-400'>PROGRESS</option>
                    <option className='bg-gray-800 font-medium text-sm text-green-400'>COMPLETED</option>
                    <option name='Other' className='bg-gray-800 font-medium text-sm text-slate-300'>Other</option>
                 </select>
                 {selType === 'Other' && (
                    <input className="ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        placeholder="Enter Other Type"
                        onChange={(e) => settitle(e.target.value)}/>
                 )}
              </div>
              
             <div className=' overflow-x-auto rounded-lg shadow max-w-full'>
                <div className='h-[350px]'>
                {error && <p className="text-red-500 ml-3 mb-3">{error}</p>}
                    <table className='table-fixed w-full '>
                    <thead className=' sticky top-0 h-[3rem] bg-gray-50 border-b-2 border-gray-200 text-gray-600'>
                        <tr className='w-24 p-3 text-lg font-semibold tracking-wide text-center'>
                            <th className=' '>Id</th>
                            <th className=''>Title</th>
                            <th className=''>Status</th>
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100 text-center'>
                {filter.map(complaint => (
                  <tr key={complaint.comid} className='bg-slate-200 p-3 text-md hover:bg-gray-300'>
                    <td className='font-bold text-blue-500'>{complaint.comid}</td>
                    <td className='text-gray-700'>{complaint.title}</td>
                    <td className='text-gray-700'>
                      <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-${complaint.status === 'Solved' ? 'green' : 'yellow'}-200 rounded-lg`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className='p-3 text-gray-700'>
                      <FontAwesomeIcon onClick={() => handleDelete(complaint.comid)} icon={faTrash} size="lg" style={{ color: "#f66151" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
                    </table>    
                </div>
            </div>   
        </div>
    </>
  )
}

export default ComplaintTab