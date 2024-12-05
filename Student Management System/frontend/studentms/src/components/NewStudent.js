import react,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function NewStudent() {

    const navigate = useNavigate();

    const [student,newstudent] = useState({
        name:"",
        email:"",
        mobileNo:"",
        courseEnrolled:""
    })

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        newstudent({...student,[name]:value})
    }

    const newStudent = async()=>{
        if(student.studentId==="" || student.email==="" || student.mobileNo==="" || student.name==="" || student.courseEnrolled===""){
            alert("Please Fill Required Details")
        }
        else{
            const response = await axios.post("http://localhost:4000/students",student)
            console.log(response)
            navigate("/")
        }
    }

  return (
    <div>
      <div>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Student Name"
          onChange={handleChange}
          value={student.name}
        ></input>
      </div>
      <div>
        <label>Student Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Student Email"
          onChange={handleChange}
          value={student.email}
        ></input>
      </div>
      <div>
        <label>Student Mobile Number</label>
        <input
          type="text"
          name="mobileNo"
          id="mobileNo"
          placeholder="Enter Student Mobile Number"
          onChange={handleChange}
          value={student.mobileNo}
        ></input>
      </div>
      <div>
        <label>Course Enrolled</label>
        <input
          type="text"
          name="courseEnrolled"
          id="courseEnrolled"
          placeholder="Enter Course Enrolled"
          onChange={handleChange}
          value={student.courseEnrolled}
        ></input>
      </div>
      <button
        type="button"
        name="editstud"
        id="editstud"
        className="btn btn-success"
        onClick={() => newStudent()}
      >
        Submit
      </button>
    </div>
  );
}
