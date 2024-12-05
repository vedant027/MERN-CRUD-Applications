import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {

    const navigate = useNavigate();
    const [task,settask]=useState({
        id:"",
        title:"",
        description:"",
        status:""
    });

    const addtask=async()=>{
        if(
            task.id==="" ||
            task.title==="" ||
            task.description==="" ||
            task.status===""
        ){
            alert("Please fill all the details");
        }
        else {
            let tsk={
                id: parseInt(task.id),
                title: task.title,
                description: task.description,
                status: task.status
            };

            const response = await axios.post("http://localhost:4002/todos",tsk)
            console.log(response);
            navigate("/")
        }
    }

    const handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        settask({...task,[name]:value})
    };

    

  return (
    <div>
      <form>
      <div className="form-group">
          <label htmlFor="id">Id</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            onChange={handleChange}
            value={task.id}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            value={task.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            onChange={handleChange}
            value={task.status}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={addtask}>
          Add Task
        </button>
      </form>
    </div>
  )
}
