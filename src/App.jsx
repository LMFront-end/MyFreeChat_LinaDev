import './App.css'
import {Routes, Route} from 'react-router-dom';

// components
import {Nabvar} from '../src/components/Nabvar';

// pages
import { MyFreeChat } from './pages/MyFreeChat'
import { Home } from '../src/pages/Home'
import { Register } from '../src/pages/Register'
import { Login } from '../src/pages/Login'
import { Profile } from './pages/Profile'
import { Contacts } from './pages/contact/Contacts'
import { Messages } from './pages/Messages'


const App = ()  => {
  
  return (
    <>
    <Nabvar />
      <Routes>

        <Route path={"/"} exact element={<MyFreeChat />}/>
        <Route path={"/register"} exact element={<Register />}/>
        <Route path={"/login"} exact element={<Login />}/>
        <Route path={"/home"} exact element={<Home />}/>
        <Route path={"/profile"} exact element={<Profile/>}/>
        <Route path={"/contacts"} exact element={<Contacts/>}/>
        <Route path={"/messenger"} exact element={<Messages/>}/>


      </Routes>
    </>
  )
}

export {App}
