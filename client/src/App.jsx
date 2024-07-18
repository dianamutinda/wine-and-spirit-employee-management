import Hero from "./pages/Home/Hero"
import Header from "./Components/Header"
import Signup from "./pages/Authentification/Signup"
import Signin from "./pages/Authentification/Signin"
import Employee from "./pages/Authentification/Employee"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/new" element={<Employee/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
