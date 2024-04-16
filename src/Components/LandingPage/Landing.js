import React, { useEffect, useState } from 'react'
import "./Landing.css"
import Footer from './Footer';
import { FaCar } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCelebration, MdLibraryBooks } from "react-icons/md";


// Images
import club from '../Assests/clubhouse.jpg'
import garden from '../Assests/garden.jpg'
import gym from '../Assests/gym.jpg'
import temple from '../Assests/temple.jpg'
import play from '../Assests/playground.jpg'
import correct from '../Assests/correct.png'


import Nav from '../Nav';
import axios from 'axios';


const Landing = () => {
  const [success, setsuccess] = useState(false)
  const [values, setvalues] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  })

  const handlechange = (e) => {
    const {name, value} = e.target;
    setvalues({
      ...values,
      [name]: value,
    })
  }

  // post data 
  const handlesubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8081/lwresident/v1/contactus/submit', values)
    .then((res) => {
      setsuccess(true)
      setTimeout(() => {
        setsuccess(false)
      },2000)
      setvalues({
        fullName: '',
        mobile: '',
        email: '',
        message: ''
      })
      console.log('submited', res);
    })
    .catch(err => console.log("failed to submit"));
  }

  
  return (
    <>
    {/* navbar */}
    <Nav/>

      {/* hero */}
      <div id='home' className='hero-section'>
        <h1 className='animate__animated animate__zoomIn'>Welcome to <span className='tl'>L</span>/<span className='tw'>W</span> Residential</h1>
        <div className='gradienet-fill'>
          <p className=''>Have Fabulous Flat and awesome Society</p>
        </div>
        </div>

      {/* Services */}
      <div className='service-container'>
        <div className='head'>
          <h1 className=''>Our services</h1>
          <p className='underline'></p>
        </div>
        <div className='row'>
          <div className='service'>
            <FaCar fontSize="40px" markerEnd='10px'/>
            <h2 className=''>Meetigns</h2>
            <p>Manage Meetings, schedule meetings any time without any problem with conclusions.</p>
          </div>
          <div className='service'>
            <GiPoliceOfficerHead  fontSize="40px" markerEnd='10px'/>
            <h2>Security</h2>
            <p>For Unknown Person, Thiefs, cameras</p>
          </div>
          <div className='service'>
            <MdLibraryBooks fontSize="40px" markerEnd='10px'/>
            <h2>Maintence</h2>
            <p>Recieved your Maintence bill on time, With all instructions and easily manage your bills</p>
          </div>
          <div className='service'>
            <MdCelebration fontSize="40px" markerEnd='10px'/>
            <h2>Function</h2>
            <p>We can manage Functions, Celebrations, Meetings, Notify on time</p>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div id='image' className='image-container'>
        <div className='head'>
          <h1 className=''>Image Gallery</h1>
          <p className='underline'></p>
        </div>
        <div className='images'> 
        <div className='photo-gallery'>
          
          <div className='column'>
            <div className='photo'>
              <img src={club}/>
              <div className='text'>
                <p>Clubhouse</p>
              </div>
            </div>
            <div className='photo'>
              <img src={play}/>
              <div className='text'>
                <p>Play Ground</p>
              </div>
            </div>
            <div className='photo'>
              <img src={garden}/>
              <div className='text'>
                <p>Garden</p>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='photo'>
              <img src={gym}/>
              <div className='text'>
                <p>Gym</p>
              </div>
            </div>
            <div className='photo'>
              <img src={temple}/>
              <div className='text'>
                <p>Temple</p>
              </div>
            </div>
          
          </div>

        </div>
      </div>
        
      </div>
    
      {/* Get in touch */}
      <div id='contact' className='get-in-touch'>
        <form onSubmit={handlesubmit} className='contact-form'>
            <button className='c-btn'>CONTACTS</button>
            <h1>Get In Touch Now</h1>
            <h4>We have Developed unique space where you can work and live with your family.</h4>

            {success && 
              <div className=' absolute flex justify-center item-center bg-cyan-50 p-3 rounded-xl shadow-lg'>
                <p className=' text-green-400 font-semibold tracking-wide'>We Will Contact you later</p>
                <img src={correct} className='w-8 h-8 ml-2 -mt-1' />
              </div>
            }
            <div className='input-form'>
              <div className='i-first'>
                <input
                  type='text'
                  className='f-input'
                  placeholder='Fullname'
                  name='fullName'
                  value={values.fullName}
                  src=''
                  onChange={handlechange}/>
              </div>
              
              <div className='i-second'>
                <input
                  type='email'
                  className='f-input'
                  placeholder='Email address'
                  value={values.email}
                  name='email'
                  src=''
                  onChange={handlechange}/>
                <input
                  type='tel'
                  className='f-input'
                  placeholder='Phone Number'
                  value={values.mobile}
                  name='mobile'
                  onChange={handlechange}/>
              </div>
              <div>
              <input
                  type='textarea'
                  className='msg-input'
                  placeholder='Your message'
                  value={values.message}
                  name='message'
                  src=''
                  onChange={handlechange}/>
              </div>
            </div>
            <div>
              <button className='f-btn'
                    type='submit' onClick={handlesubmit}>Send Request</button>
            </div>
       
        </form>
      </div>

      
      <Footer />
    </>
  ) 
}

export default Landing