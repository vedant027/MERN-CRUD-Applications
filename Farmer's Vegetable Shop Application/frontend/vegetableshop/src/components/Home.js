import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Home() {

    const [vegetables,setvegetables] = useState([]);
    const [flag,setflag] = useState(false);
    const [vegtb,newvegtb]=useState({
        vegetable_name:"",
        vegetable_type:"",
        quantity:"",
        price:""
    });

    useEffect(()=>{
        fetchvegetables();
    },[])

    const fetchvegetables = async()=>{
        const response = await axios.get("http://localhost:4000/vegetables")
        console.log(response.data);
        setvegetables(response.data);
    }

    const deletevegt = async(id)=>{
        const response = await axios.delete("http://localhost:4000/vegetables/"+id)
        console.log(response);
        fetchvegetables();
    }

    const insertvegt = async()=>{
        if(
            vegtb.vegetable_name==="" ||
            vegtb.vegetable_type==="" ||
            vegtb.quantity==="" ||
            vegtb.price===""
        ){
            alert("Pls fill all the fields");
        }
        else{
            const response = await axios.post("http://localhost:4000/vegetables",vegtb);
            console.log(response);
            fetchvegetables();
            newvegtb({
                vegetable_name:"",
                vegetable_type:"",
                quantity:"",
                price:""
            });
        }
    }

    const resetvegt = ()=>{
        newvegtb({
            vegetable_name:"",
            vegetable_type:"",
            quantity:"",
            price:""
        });
    }

    const changeHandle = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        newvegtb({...vegtb,[name]:value})
    }

  return (
    <div>
    <div style={{"maxWidth":"fit-content","marginLeft":"auto","marginRight":"auto"}}>
        <form style={{"width" : "460px","margin" : "2rem","backgroundColor" : "#85A98F","padding" : "2.5rem","borderRadius":"0.5rem"}}>
            <h1 style={{"fontSize":"1.3rem","textDecoration":"underline","marginBottom":"1.5rem"}}>Farmer's Vegetable Shop Application</h1>
            <div className='form-group'>
                <label htmlFor='vegetable_name'>Vegetable Name</label>
                <input type='text' name='vegetable_name' className='form-control' id='vegetable_name' onChange={changeHandle} value={vegtb.vegetable_name} placeholder='Enter Vegetable Name' style={{"width" : "350px"}}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='vegetable_type'>Vegetable Type</label><br/>
                {/* <input type='text' name='vegetable_type' className='form-control' id='vegetable_type' onChange={changeHandle} value={vegetables.vegetable_type} placeholder='Enter Vegetable Type' style={{"width" : "350px"}}></input> */}
                <select name='vegetable_type' id='vegetable_type' onChange={changeHandle} value={vegtb.vegetable_type}  style={{"width" : "350px","height":"2.7rem","borderRadius":"0.3rem"}}>
                    <option value="">--Please choose an option--</option>
                    <option value="Starchy">Starchy</option>
                    <option value="Persian">Persian</option>
                    <option value="Shelling">Shelling</option>
                    <option value="Root Vegetable">Root Vegetable</option>
                </select>

            </div>
            <div className='form-group'>
                <label htmlFor='quantity'>Quantity</label>
                <input type='text' name='quantity' className='form-control' id='quantity' onChange={changeHandle} value={vegtb.quantity} placeholder='Enter Vegetable Quantity' style={{"width" : "350px"}}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='price'>Price</label>
                <input type='text' name='price' className='form-control' id='price' onChange={changeHandle} value={vegtb.price} placeholder='Price' style={{"width" : "350px"}}></input>
            </div>
            <button type='button' name='insert' id='insert' className='btn btn-primary' onClick={()=>{insertvegt()}}>Insert</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' name='reset' id='reset' className='btn btn-secondary' onClick={()=>{resetvegt()}}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' name='display' id='display' className='btn btn-success' onClick={()=>{setflag(!flag)}}>Display</button>
        </form>

        </div>
    {flag?
    <table border={2} className='table table-striped table-dark'>
     <thead>
        <tr>
            <th>Vegetable Name</th>
            <th>Vegetable Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
     </thead>
     <tbody>
        {vegetables.map((vegt)=>(
            <tr key={vegt.id}>
                <td>{vegt.vegetable_name}</td>
                <td>{vegt.vegetable_type}</td>
                <td>{vegt.quantity}</td>
                <td>{vegt.price}</td>
                <td>
                    <button type='button' name='delete' id='delete' className='btn btn-danger' onClick={()=>{deletevegt(vegt.id)}}>Delete</button>
                </td>
                <td>
                    <Link to={`/update/${vegt.id}`} state={{editob:vegt}}>
                    <button type='button' name='update' id='update' className='btn btn-primary'>Update</button>
                    </Link>
                </td>
            </tr>
        ))}
     </tbody>
    </table>
    :""}    
    
    </div>
  )
}
