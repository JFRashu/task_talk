import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import React from 'react'

 import moduleName from 'module'
// import {Button} from 'react'
// import './App.css'

// import Component2 from './component2'
import Home from './Component/Home/Home'
 import Login from './Component/Rashu/Login/Login'
import Registration from './Component/Rashu/Registration/Registration'
// import Header from './Header'
 
function App() {
//  const [count, setCount] = useState(0)
  
  return (
   
    <>
   
    {/* <Header></Header>  */}
    {/* <Home></Home>  */}
    {/* <Login></Login>*/}
     {/* <Registration></Registration>  */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/registration' element={<Registration/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
      
    </>
    
  )
}

export default App
