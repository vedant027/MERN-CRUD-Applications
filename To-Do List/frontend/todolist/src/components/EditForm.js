import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditForm() {
    const params=useParams();
    const location=useLocation();
    const navigate=useNavigate();

    const[taskdetails,settaskdetails]=useState({
        id:"",
        title:"",
        description:"",
        status:""
    });

    const handlechange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        settaskdetails({...taskdetails,[name]:value})
    }

    const updatetask=async()=>{
        const response = await axios.put("http://localhost:4002/todos/"+taskdetails.id,taskdetails);
        console.log(response)
        navigate("/")
    }

    useEffect(()=>{
        settaskdetails({...location.state.editob})
    },[])



  return (
    <div>
      <table>
        <tr>
          <td>
            <label>Id: </label>
            &nbsp;<input type="text" name="id" id="id" onChange={handlechange} value={taskdetails.id} readOnly></input>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td>
            <label>Title: </label>
            &nbsp;<input type="text" name="title" id="title" onChange={handlechange} value={taskdetails.title}></input>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td>
            <label>Description: </label>
            &nbsp;<input type="text" name="description" id="description" onChange={handlechange} value={taskdetails.description}></input>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td>
            <label>Status: </label>
            &nbsp;<input type="text" name="status" id="status" onChange={handlechange} value={taskdetails.status}></input>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td>
            <button
              type="button"
              name="update"
              id="update"
              className="btn btn-success"
              onClick={updatetask}>
              Update
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
