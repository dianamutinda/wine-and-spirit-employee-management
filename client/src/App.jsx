import Hero from "./pages/Home/Hero"
import Header from "./Components/Header"
import Signup from "./pages/Authentification/Signup"
import Signin from "./pages/Authentification/Signin"
import Employee from "./pages/Authentification/Employee"
import Admin from "./pages/Admin/Admin"
import AllEmployees from "./pages/Admin/AllEmployees"
import Approve from "./pages/Admin/Approve"
import Sales from "./pages/Admin/Sales"
import AddItems from "./pages/Admin/AddItems"
import Employees from "./pages/Employee/Employee"
import Orders from "./pages/Employee/Orders"
import EmpProfile from "./pages/Employee/EmpProfile"
import EmpSales from "./pages/Employee/EmployeeSales"
import Items from "./pages/Employee/Items"
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
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/employees" element={<AllEmployees/>}/>
      <Route path="/admin/approve" element={<Approve/>}/>
      <Route path="/admin/sales" element={<Sales/>}/>
      <Route path="/admin/add" element={<AddItems/>}/>
      <Route path="/admin/add" element={<AddItems/>}/>
      <Route path="/employee" element={<Employees/>}/>
      <Route path="/employee/orders" element={<Orders/>}/>
      <Route path="/employee/profile" element={<EmpProfile/>}/>
      <Route path="/employee/sales" element={<EmpSales/>}/>
      <Route path="/employee/items" element={<Items/>}/>




    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
