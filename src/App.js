import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Main from './pages/Main';
import UP from './pages/UP';
import Profile from './pages/Profile';
import Forgotpassword from './pages/Forgotpassword';
import Collections from './pages/Collections';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './data/apipath';
// import { UserProvider } from './pages/UserContext';
const App = () => {
  const GoogleAuthWrapper = () => {
    return(
      <GoogleOAuthProvider clientId={clientId}>
        <Login></Login>
      </GoogleOAuthProvider>
    )
  }
  return (
    <div className='App'>
      <Routes>
            <Route path='/' element={ <Navigate to="/home"/>}></Route>
            <Route path='/login' element={<GoogleAuthWrapper/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/main' element={<Main/>}></Route>
            <Route path='/up' element={<UP/>}></Route>
            <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/collections'element={<Collections/>}></Route>
      </Routes>
  
      </div>
  )
}

export default App