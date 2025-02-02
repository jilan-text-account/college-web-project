import {React, useState} from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import Slider from './slider';
import Staff from './Staff';
import Navbar from './Navbar';

function Students() {

    const [Students, setStudents]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/")
        .then(res=>setStudents(res.data))
        .catch(error=>console.log(error))
    })

    function handledelete(id) {
        axios.delete(`http://localhost:5000/deletestudent/${id}`, {id})
        .then(res=>{
            Navigate("/")
            console.log("deleted user: ", res)
        })
        .catch(error=>console.log(error))
    }


  return (
    
    <div>
        <Navbar />

        <Slider />

        <Staff />
        
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rouned p-3'>
            <Link to="/create" className='btn btn-success'>+ add</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>age</th>
                        <th>action</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((Student)=>{
                        return (
                            <tr>
                            <td>{Student.name}</td>
                            <td>{Student.email}</td>
                            <td>{Student.age}</td>
                            <td><Link to={`/update/${Student.id}`} className='btn btn-success'>Update</Link></td>
                            <td><button onClick={(e)=>handledelete(Student.id)} className='btn btn-success'>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Students