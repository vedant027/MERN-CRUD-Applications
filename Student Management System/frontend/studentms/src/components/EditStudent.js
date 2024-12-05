import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

export default function EditStudent() {

    const location = useLocation();
    const navigate = useNavigate();

    const [student,setstudent] =useState({
        studentId:"",
        name:"",
        email:"",
        mobileNo:"",
        courseEnrolled:""
    })

    useEffect(()=>{
        setstudent({...location.state.editob})
    },[])

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setstudent({...student,[name]:value})
    }

    const editStudent = async(Id)=>{
        if(student.studentId==="" || student.email==="" || student.mobileNo==="" || student.name==="" || student.courseEnrolled===""){
            alert("Please Fill Required Details")
        }
        else{
            const response = await axios.put('http://localhost:4000/students/'+Id,student)
            console.log(response)
            navigate("/")
        }
        
    }

  return (
    <div>
        <div>
            <label>Student ID</label>
            <input type='text' name='studentId' id='studentId' placeholder='Enter Student ID' onChange={handleChange} value={student.studentId} readOnly></input>
        </div>
        <div>
            <label>Student Name</label>
            <input type='text' name='name' id='name' placeholder='Enter Student Name' onChange={handleChange} value={student.name}></input>
        </div>
        <div>
            <label>Student Email</label>
            <input type='text' name='email' id='email' placeholder='Enter Student Email' onChange={handleChange} value={student.email}></input>
        </div>
        <div>
            <label>Student Mobile Number</label>
            <input type='text' name='mobileNo' id='mobileNo' placeholder='Enter Student Mobile Number' onChange={handleChange} value={student.mobileNo}></input>
        </div>
        <div>
            <label>Course Enrolled</label>
            <input type='text' name='courseEnrolled' id='courseEnrolled' placeholder='Enter Course Enrolled' onChange={handleChange} value={student.courseEnrolled}></input>
        </div>
        <button type='button' name='editstud' id='editstud' className='btn btn-success' onClick={()=>editStudent(student.studentId)}>Edit Details</button>
    </div>
  )
}
