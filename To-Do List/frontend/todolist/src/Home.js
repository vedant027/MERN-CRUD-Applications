import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
// import { state } from '../../../backend/db/dbconnection';
import {Link} from 'react-router-dom';
import './Style.css'


export default function Home() {
    const [todos,settodos] = useState([])

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async() =>{
        const response = await axios.get("http://localhost:4002/todos");
        settodos(response.data);
    }

    const deletetask = async(id) =>{
        const response = await axios.delete("http://localhost:4002/todos/"+id);
        console.log(response.data)
        // let newtodos = todos.filter((tsk)=>tsk.id!==id)
        // settodos(newtodos);
        fetchdata();
    }

    const completedtask = async(id) =>{
        const response = await axios.patch("http://localhost:4002/todos/"+id);
        console.log(response);
        fetchdata();
    }

  return (
    <div>
        <Link to={`/add`}>
        <button type='button' name='add' id='add' className='btn btn-primary'
         style={{"marginBottom":"0.5rem", "marginLeft":"0.5rem"}}>Add New Task</button>
        </Link>
        <table className='table table-dark task-table' border={1}>
            <thead>
                <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Status</th>
                <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo)=>(
                    <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.status}</td>
                    <td>
                        <Link to={`/edit/${todo.id}`} state={{editob:todo}}>
                        <button type='button' name='edit' id='edit' className='btn btn-primary'>Edit</button>&nbsp;&nbsp;
                        </Link>
                        <button type='button' name='delete' id='delete' className='btn btn-danger' onClick={() => {deletetask(todo.id)}}>Delete</button>&nbsp;&nbsp;
                        <button type='button' name='status' id='status' className='btn btn-success' onClick={() => {completedtask(todo.id)}}>Complete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
            
        </table>

    </div>
  )
}
