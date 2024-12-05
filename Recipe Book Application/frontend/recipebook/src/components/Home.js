import React,{useState,useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Home() {
    const [recipe,setrecipe]=useState([]);

    const fetchdata=async()=>{
        const response = await axios.get("http://localhost:4000/recipe");
        console.log(response.data);
        setrecipe(response.data);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    const deleterecipe = async(ID)=>{
        const response = await axios.delete("http://localhost:4000/recipe/"+ID);
        console.log(response);
        fetchdata();
    }

  return (
    <div>
        <Link to={`/recipe/add`}>
        <button type='button' name='addnew' id='addnew' className='btn btn-primary' style={{"margin":"0.5rem"}}>Add New Recipe</button>
        </Link>
        <Link to={`/form`}>
        <button type='button' name='addnew' id='addnew' className='btn btn-secondary' style={{"margin":"0.5rem"}}>Validation Form</button>
        </Link>

        <table border={1} className='table table-striped table-dark'>
            <thead className='table-primary'>
                <tr>
                    <th scope='col' style={{"color":"black"}}>ID</th>
                    <th scope='col' style={{"color":"black"}}>Title</th>
                    <th scope='col' style={{"color":"black"}}>Ingredients</th>
                    <th scope='col' style={{"color":"black"}}>Category</th>
                    <th scope='col' style={{"color":"black"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
               {recipe.map((rcp)=>(
                    <tr key={rcp.ID}>
                    <td>{rcp.ID}</td>
                    <td>{rcp.Title}</td>
                    <td>{rcp.Ingredients}</td>
                    <td>{rcp.Category}</td>
                    <td>
                        <Link to={`/edit/${rcp.ID}`} state={{editob:rcp}}>
                        <button type='button' name='edit' id='edit' className='btn btn-success'>Edit</button>&nbsp;&nbsp;&nbsp;
                        </Link>
                        <button type='button' name='delete' id='delete' className='btn btn-danger' onClick={() => {deleterecipe(rcp.ID)}}>Delete</button>
                    </td>
                    </tr>
               ))} 
            </tbody>
        </table>
    </div>
  )
}
