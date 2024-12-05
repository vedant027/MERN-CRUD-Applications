import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {

    const navigate = useNavigate();
    const location = useLocation();

    const [vegetables,setvegetables] = useState({
        vegetable_name:"",
        vegetable_type:"",
        quantity:"",
        price:""
    })

    const changeHandle = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        
        setvegetables({...vegetables,[name]:value});
    }

    const editvegt = async(id)=>{
        const response = await axios.put("http://localhost:4000/vegetables/"+id,vegetables);
        console.log(response);
        navigate("/")
    }

    useEffect(()=>{
        setvegetables({...location.state.editob})
    },[])

  return (
    <div>
        <form style={{"width" : "460px","margin" : "2rem","backgroundColor" : "#85A98F","padding" : "2.5rem","borderRadius":"0.5rem"}}>
            <div className='form-group'>
                <label htmlFor='vegetable_name'>Vegetable Name</label>
                <input type='text' name='vegetable_name' className='form-control' id='vegetable_name' onChange={changeHandle} value={vegetables.vegetable_name} placeholder='Enter Vegetable Name' style={{"width" : "350px"}}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='vegetable_type'>Vegetable Type</label><br/>
                {/* <input type='text' name='vegetable_type' className='form-control' id='vegetable_type' onChange={changeHandle} value={vegetables.vegetable_type} placeholder='Enter Vegetable Type' style={{"width" : "350px"}}></input> */}
                <select name='vegetable_type' id='vegetable_type' onChange={changeHandle} value={vegetables.vegetable_type} style={{"width" : "350px","height":"2.7rem","borderRadius":"0.3rem"}}>
                    <option value="">--Please choose an option--</option>
                    <option value="Starchy">Starchy</option>
                    <option value="Persian">Persian</option>
                    <option value="Shelling">Shelling</option>
                    <option value="Root Vegetable">Root Vegetable</option>
                </select>

            </div>
            <div className='form-group'>
                <label htmlFor='quantity'>Quantity</label>
                <input type='text' name='quantity' className='form-control' id='quantity' onChange={changeHandle} value={vegetables.quantity} placeholder='Enter Vegetable Quantity' style={{"width" : "350px"}}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='price'>Price</label>
                <input type='text' name='price' className='form-control' id='price' onChange={changeHandle} value={vegetables.price} placeholder='Price' style={{"width" : "350px"}}></input>
            </div>
            <button type='button' name='edit' id='edit' className='btn btn-success' onClick={()=>{editvegt(vegetables.id)}}>Edit Vegetable</button>
        </form>
    </div>
  )
}
