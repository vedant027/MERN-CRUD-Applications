import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'


export default function Home() {
    const [students,setstudents] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async() =>{
        const response = await axios.get("http://localhost:4000/students")
        console.log(response)
        setstudents(response.data);
    }

    const deletestudent = async(Id)=>{
        const response = await axios.delete("http://localhost:4000/students/"+Id)
        console.log(response)
        fetchdata();
    }

  return (
    <div>
        <Link to={`/add/student`}>
        <button type='button' name='addnew' id='addnew' className='btn btn-success'>Add New Student</button>
        </Link>
        <table border={2} className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Course Enrolled</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((stud)=>(
                    <tr key={stud.studentId}>
                        <td>{stud.studentId}</td>
                        <td>{stud.name}</td>
                        <td>{stud.email}</td>
                        <td>{stud.mobileNo}</td>
                        <td>{stud.courseEnrolled}</td>
                        <td>
                            <Link to={`/edit/${stud.studentId}`} state={{editob:stud}}>
                            <button type='button' name='edit' id='edit' className='btn btn-primary'>Edit</button>&nbsp;&nbsp;&nbsp;
                            </Link>
                            <button type='button' name='success' id='success' className='btn btn-danger' onClick={() => deletestudent(stud.studentId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
