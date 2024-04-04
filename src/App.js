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
import Dashboard from './Components/Dashboard/Dashboard'
import Landing from './Components/LandingPage/Landing'
import Log from './Components/Registration/Log'
import Register from './Components/Registration/Register'
import Maintanance from './Components/Maintanance/Maintanance'
import { isLoggedIn } from './Services/authService'
import Profile from './Components/Profile'
import AdminDashboard from './Components/Admin/AdminDashboard'
import Approval from './Components/Admin/Approval'
import SecMeetings from './Components/Admin/CreateMeetings'
import Users from './Components/Admin/Users'


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

        {/* Admin */}
        <Route path='/admindashboard' element={<AdminDashboard />}/>
        <Route path='/approval' element={<Approval />}/>
        <Route path='users' element={<Users/>}/>
        
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
        <Route path='/createmeeting' element={<SecMeetings/>}/>

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