import React from 'react'
import "./Landing.css"
import Footer from './Footer';
import { FaCar } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCelebration, MdLibraryBooks } from "react-icons/md";

// Images
import club from '../Assests/clubhouse.jpg'
import garden from '../Assests/garden.jpg'
import resident from '../Assests/bgImage.jpg'
import gym from '../Assests/gym.jpg'
import temple from '../Assests/temple.jpg'
import pool from '../Assests/swim.jpeg'
import play from '../Assests/playground.jpg'


import Nav from '../Nav';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <>
    {/* navbar */}
    <Nav/>

      {/* hero */}
      <div className='hero-section'>
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
      <div className='image-container'>
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
      <div className='get-in-touch'>
        <form className='contact-form'>
            <button className='c-btn'>CONTACTS</button>
            <h1>Get In Touch Now</h1>
            <h4>We have Developed unique space where you can work and live with your family.</h4>

            <div className='input-form'>
              <div className='i-first'>
                <input
                  type='text'
                  className='f-input'
                  placeholder='Fullname'
                  name='fullname'
                  value=''
                  src=''
                  onChange={''}/>
              </div>
              
              <div className='i-second'>
                <input
                  type='email'
                  className='f-input'
                  placeholder='Email address'
                  value=''
                  name='email'
                  src=''
                  onChange={''}/>
                <input
                  type='tel'
                  className='f-input'
                  placeholder='Phone Number'
                  value=''
                  name='mobile'
                  onChange={''}/>
              </div>
              <div>
              <input
                  type='textarea'
                  className='msg-input'
                  placeholder='Your message'
                  value=''
                  name='message'
                  src=''
                  onChange={''}/>
              </div>
            </div>
            <div>
              <button className='f-btn'>Send Request</button>
            </div>
        </form>
      </div>

      
      <Footer />
    </>
  ) 
}

export default Landing