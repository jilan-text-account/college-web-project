import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Createuser() {
    const [name, setname]=useState('');
    const [email, setemail]=useState('');
    const [age, setage]=useState();
    const navigate=useNavigate();

    function Submit(e){
        e.preventDefault();
        axios.post("http://localhost:5000/register", {name, email, age})
        .then(result=>{
            console.log("user details is created :",result)
            navigate("/")
        })
        .catch(error=>console.log(error))
    }
   
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rouned p-3'>
            <form onSubmit={Submit}>
              <h1>Add User</h1>
               <div className='mb-2'>
                   <label htmlFor="name">Name</label>
                   <input type='text' placeholder='Enter Name' className='form-control' onChange={(e)=>setname(e.target.value)}/>
               </div>
               <div className='mb-2'>
                   <label htmlFor="Email">Email</label>
                   <input type='text' placeholder='Enter email' className='form-control' onChange={(e)=>setemail(e.target.value)}/>
               </div>
               <div className='mb-2'>
                   <label htmlFor="age">Age</label>
                   <input type='text' placeholder='Enter age' className='form-control' onChange={(e)=>setage(e.target.value)}/>
               </div>
               <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Createuser