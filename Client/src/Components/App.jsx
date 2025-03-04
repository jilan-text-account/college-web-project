import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Students from "./Students"
import Createuser from "./Createuser"
import Update from "./Update"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Students />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Contactus" element={<Contactus />}></Route>
      <Route path="/Help" element={<Help />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Create" element={<Createuser />}></Route>
      <Route path="/Update/:id" element={<Update />}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
