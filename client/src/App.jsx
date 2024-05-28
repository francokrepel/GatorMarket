import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios"

import Home from "./pages/Home.jsx"
import Signup from  "./pages/Signup.jsx"
import Login from './pages/Login.jsx'
import Search from './pages/Search.jsx'
import Profile from "./pages/Profile.jsx"
import Chat from './pages/Chat.jsx'
import Navbar from "./components/Navbar.jsx"


import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

// middleware
axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {
  return (
  <BrowserRouter>
  {/* <BackgroundGradientAnimation> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/search" element={ <Search/> }/>
      <Route path="/signup" element={ <Signup/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/chat" element={ <Chat/> }/>
      <Route path="/profile" element={ <Profile/> }/>
    </Routes>
    {/* </BackgroundGradientAnimation> */}
  </BrowserRouter>
  )
} 

export default App

/*
Link: Used for creating links in your application that enable client-side navigation without a page reload.
Route: Used for declaring renderable routes in your application that display components based on the current URL path.
*/