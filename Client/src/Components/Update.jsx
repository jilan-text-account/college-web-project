import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function UpdateUser() {

  const { id } = useParams();
  const [name, setname]=useState('');
  const [email, setemail]=useState('');
  const [age, setage]=useState('');

  const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/Student/${id}`)
        .then(result=>{
          setname(result.data.name);
          setemail(result.data.email);
          setage(result.data.age);
        })
        .catch(error=>console.log(error));
    },[id]);

    function handleSubmit(e){
      e.preventDefault();
      axios.put(`http://localhost:5000/updateStudent/${id}`, {name, email, age})
      .then(response=>{
        console.log('user updated:', response.data)
        navigate("/")
      })
      .catch(error=>console.error("error in updating users details",error))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rouned p-3'>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="name">Name</label>
                <input type='text' className='form-control' onChange={(e)=>setname(e.target.value)} value={name}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="Email">Email</label>
                <input type='text' className='form-control' onChange={(e)=>setemail(e.target.value)} value={email}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="age">Age</label>
                <input type='text' className='form-control' onChange={(e)=>setage(e.target.value)} value={age}/>
            </div>
            <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser