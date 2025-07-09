import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/main-page/home'
import SignUp from './pages/signup-page/signup';
import LogIn from './pages/login-page/login';
import CreateRoom from './pages/create-room-page/createRoom';
import SelectRoom from "./pages/room-page/select/selectRoom"
import ChantRoom from './pages/room-page/chant-room/chantRoom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/room' element={<ChantRoom/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/rooms' element={<SelectRoom />}/>
        <Route path='/create' element={<CreateRoom/>}/>
      </Routes>
    </Router>
  )
}

export default App
