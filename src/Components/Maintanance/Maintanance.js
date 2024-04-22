import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import { TbCoinRupee } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import axios from 'axios';

const Maintanance = () => {
    const years = ["2022", "2023", "2024"];
    const status = ["Paid", "Dueto", "Rejected"];
    
    const [maintanance, setMaintanance] = useState({Paid: [], Unpaid: []})

    useEffect(() => {
        fetchData("Paid");
        fetchData("Unpaid");
    }, []);


    //get UNPAID mainenance
    const fetchData = () => {
        axios.get(`http://localhost:8081/lwresident/v1/maintenance/generate`)
        .then((res => {
            if(status == "PAID"){
                setMaintanance(prevState => ({
                    ...prevState,
                    paid: res.data
                }));
            }
            else if(status == "UNPAID"){
                setMaintanance(prevState => ({
                    ...prevState,
                    unpaid: res.data
                }));
            }
        }))
        .catch(err => console.log("error while fetching maintenance"));
    }
    
  return (
   <>
    <div className='bg-gray-900 h-auto'>
        <div>
            <Nav/>
        </div>
    <div>
        {/* Due dates */}
        <div className='h-auto bg-slate-200'>
            <h1 className=' text-xl mb-5 ml-3 font-medium text-gray-700'>Your Monthly Maintanance</h1>    
            <div className='flex justify-around font-medium tracking-wide pb-3 rounded-b-lg'>
                <div className='flex flex-col gap-3'>
                    <h4>Dues</h4>
                    <p className='text-red-500 '>1200</p>
                <div className='flex flex-col gap-3'>
                    </div>
                    <h4>Deposite</h4>
                    <p className='text-center'>0</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h4>Total Advance</h4>
                    <p className=' text-green-500 text-center'>0</p>
                </div>
            </div>
        </div>

        {/* Filter */}
        <div className='flex items-center p-5 gap-8'>
            <div className=''>
                <select className='w-auto bg-yellow-400 rounded-full border-none outline-none text-white font-medium tracking-wide px-8 '>
                    {years.map((year, i) => (
                        <option className='bg-gray-600 text-yellow-400'
                                key={i}
                                value={year}
                                 >{year}
                        </option>            
                    ))}
                </select>
            </div>

            <div>
            <select className='w-auto text-yellow-400 bg-transparent text-lg border-none outline-none font-medium tracking-wide'>
                    {status.map((status, i) => (
                        <option className='bg-gray-600 text-yellow-500 text-sm'
                                key={i}
                                value={status}
                                 >{status}
                        </option>            
                    ))}
                </select>
            </div>
        </div>
        
        {/* Maintanance List */}
        <div className='grid grid-cols-1 md:grid-cols-3 w-full px-4 py-8'>
            {/* NEW AND DUETO LIST */}
            <div>
                <h2 className=' text-right text-lg font-semibold text-gray-500'>DueTo</h2>
                <div className='flex flex-col h-auto bg-slate-100 rounded-md outline-none border-none gap-3 px-3 py-2'>
                    <div className='flex item-center gap-12 '>
                        <h2 className='text-blue-500 text-xl font-bold '>235</h2>
                        <h1 className='text-gray-900 text-xl font-bold '>April-Maintanance</h1>
                    </div>
                    {/* status */}
                    <div className='flex'>
                        <h2 className=' bg-red-500 text-white rounded-full px-[5px] py-[1px]'>Unpaid</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdOutlineDateRange className='w-7 h-7 opacity-35'/>
                        <p className=' text-gray-600 font-normal text-lg tracking-wide'>06/03/2024</p>
                    </div>
                    {/* Amount */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <TbCoinRupee className='w-7 h-7 opacity-35'/>
                            <p className='text-[22px] font-bold tracking-wide'>500/-</p>
                        </div>
                        <div className=' bg-green-100 px-3 max-lg:mr-5 rounded-md font-normal shadow-md text-green-600 text-xl'>
                            Pay Now
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Maintanance List */}
        <div className='grid grid-cols-1 md:grid-cols-3 w-full px-4 py-8'>
            {/* PAID */}
            <div>
                <h2 className=' text-right text-lg font-semibold text-gray-500'>Receipts</h2>
                <div className='flex flex-col h-auto bg-slate-100 rounded-md outline-none border-none gap-3 px-3 py-2'>
                    <div className='flex item-center gap-12 '>
                        <h2 className='text-blue-500 text-xl font-bold '>234</h2>
                        <h1 className='text-gray-900 text-xl font-bold '>March-Maintanance</h1>
                    </div>
                    {/* status */}
                    <div className='flex'>
                        <h2 className=' bg-green-500 text-white rounded-full px-[5px] py-[1px]'>Paid</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdOutlineDateRange className='w-7 h-7 opacity-35'/>
                        <p className=' text-gray-600 font-normal text-lg tracking-wide'>12/03/2024</p>
                    </div>
                    {/* Amount */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <TbCoinRupee className='w-7 h-7 opacity-35'/>
                            <p className='text-[22px] font-bold tracking-wide'>500/-</p>
                        </div>
                        <div className=' bg-green-100 px-3 max-lg:mr-5 rounded-md font-normal shadow-md text-slate-600 text-xl'>
                            PAID
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Maintanance