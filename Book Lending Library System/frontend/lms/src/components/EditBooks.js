import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditBooks() {
    const params=useParams();
    const location=useLocation();
    const navigate=useNavigate();

    const [bookdetails,setbookdetails]=useState({
        id:"",
        title:"",
        author:"",
        genre:"",
        status:""
    });

    const handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setbookdetails({...bookdetails,[name]:value})
    }

    const updatebook = async(Id)=>{
        const response = await axios.put("http://localhost:4002/books/update/"+Id,bookdetails);
        console.log(response);
        navigate("/")
    }

    useEffect(()=>{
        setbookdetails({...location.state.editob})
    },[])

  return (
    <div>
        <div className='form-group'>
            <label>Id</label>
            <input type='number' name='id' id='id' readOnly onChange={handleChange} value={bookdetails.id}></input>
        </div>
        <div className='form-group'>
            <label>Title</label>
            <input type='text' name='title' id='title' onChange={handleChange} value={bookdetails.title}></input>
        </div>
        <div className='form-group'>
            <label>Author</label>
            <input type='text' name='author' id='author' onChange={handleChange} value={bookdetails.author}></input>
        </div>
        <div className='form-group'>
            <label>Genre</label>
            <input type='text' name='genre' id='genre' onChange={handleChange} value={bookdetails.genre}></input>
        </div>
        <div className='form-group'>
            <label>Status</label>
            <input type='text' name='status' id='status' onChange={handleChange} value={bookdetails.status}></input>
        </div>
        <button type='button' name='edit' id='edit' className='btn btn-primary' onClick={()=>updatebook(bookdetails.id)}>Edit Book</button>
    </div>
  )
}
