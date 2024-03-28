import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import { isLoggedIn } from './Services/authService'
import Profile from './Components/Profile'


const App = () => {
  
  //Secure Routes
    const Authenticated = ({children}) => {
      const isAuth = isLoggedIn();

      if(isAuth){
        return children;
      }
      else{
        return <Navigate to='/log'/>
      }
    } 

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
        <Route path='/dash'  
            element={<Authenticated>
              <Dashboard />
            </Authenticated>
        }/>

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

        {/* Profile */}
        <Route path='/profile' element={<Profile />}/>

        {/* FeedBack */}
        <Route path='/feed' element={<Feed />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App