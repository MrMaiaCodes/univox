import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './main-page/Home'
import SignUp from './signup-page/SignUp';
import LogIn from './login-page/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        {/* <Route path='/rooms' element={<Rooms />}/> */}
      </Routes>
    </Router>
  )
}

export default App
