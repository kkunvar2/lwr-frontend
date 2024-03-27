import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestReport from './Components/Guest/GuestReport'
import ComplaintTab from './Components/Complaint/ComplaintTab'
import ComplaintForm from './Components/Complaint/ComplaintForm'
import Feed from './Components/Feedback/Feed'
import MemEvent from './Components/Events/MemEvent'
import Guest from './Components/Guest/Guest'
import GuestForm from './Components/Guest/GuestForm'
import GuestRecords from './Components/Guest/GuestRecords'
import MemMeeting from './Components/Meetings/MemMeeting'
import SecMeetings from './Components/Meetings/SecMeetings'
import Dashboard from './Components/Dashboard/Dashboard'
import Landing from './Components/LandingPage/Landing'
import Log from './Components/Registration/Log'
import Register from './Components/Registration/Register'
import Maintanance from './Components/Maintanance/Maintanance'


const App = () => {

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path='/' element={<Landing />}/>

        {/* Login & Signup*/}
        <Route path='/log' element={<Log />}/>
        <Route path='/register' element={<Register />}/>

        {/* Dashboard */}
        <Route path='/dash' element={<Dashboard />}/>

        {/* Guest */}
        <Route path='/guest' element={<Guest/>}/>
        <Route path='/guestform' element={<GuestForm />}/>
        <Route path='/guestreport' element={<GuestReport />}/>
        <Route path='/guestrecords' element={<GuestRecords />}/>

        {/* Complaint */}
        <Route path='/complaintForm' element={<ComplaintForm />}/>
        <Route path='/complaintTab' element={<ComplaintTab />}/>

        {/* Event */}
        <Route path='/memevent' element={<MemEvent />}/>

        {/* Meetings */}
        <Route path='/memmeeting' element={<MemMeeting />}/>
        <Route path='/secmeeting' element={<SecMeetings/>}/>

        
        {/* Maintanance */}
        <Route path='/memMaintanance' element={<Maintanance/>}/>

        {/* FeedBack */}
        <Route path='/feed' element={<Feed />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App