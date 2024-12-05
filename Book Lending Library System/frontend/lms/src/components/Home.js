import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function Home() {
    const [books,setbooks]=useState([]);
    const [flag,setFlag]=useState(false);
    const [newBook,setnewBook]=useState({
        title:"",
        author:"",
        genre:"",
        status:""
    });

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
        const response = await axios.get("http://localhost:4002/books/view");
        setbooks(response.data)
    }

    const deletebook=async(Id)=>{
        const response = await axios.delete("http://localhost:4002/books/delete/"+Id);
        console.log(response)
        fetchdata();
    }

    const updatestatus=async(Id,Status)=>{
        if(Status==="Borrowed"){
            const response = await axios.patch("http://localhost:4002/books/avail/"+Id);
            console.log(response);
            fetchdata();
        }
        else{
           
            const response= await axios.patch("http://localhost:4002/books/"+Id);
            console.log(response);
            fetchdata();
        }
        
    }

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setnewBook({...newBook,[name]:value})
    }

    const addBook = async()=>{
        if(newBook.title==="" || newBook.author==="" || newBook.genre==="" || newBook.status===""){
            alert("Please fill all the details")
        }
        else{
            const response = await axios.post("http://localhost:4002/books/add",newBook);
            console.log(response);
            fetchdata();
            setnewBook({
                title:"",
                author:"",
                genre:"",
                status:""
            })
            setFlag(false);
        }
    }



  return (
    <div>
        <button type='button' name='add' id='add' className='btn btn-primary' onClick={() => setFlag(!flag)} style={{"marginLeft":"2rem"}}>Add Book</button>

        {flag ? <form style={{margin: '10px'}}>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input type='text' className='form-control' id='title' name='title' placeholder='Enter Title' onChange={handleChange} value={newBook.title}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input type='text' className='form-control' id='author' name='author' placeholder='Enter author' onChange={handleChange} value={newBook.author}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='genre'>Genre</label>
                <input type='text' className='form-control' id='genre' name='genre' placeholder='Enter genre' onChange={handleChange} value={newBook.genre}></input>
            </div>
            <div className='form-group'>
                <label htmlFor='status'>Status</label>
                <input type='text' className='form-control' id='status' name='status' placeholder='Enter status' onChange={handleChange} value={newBook.status}></input>
            </div>
            <button type='button' name='add' id='add' className='btn btn-primary' onClick={addBook}>Add Book</button>
        </form>:""}


        <table className='table table-striped table-dark' style={{"width":"85%","marginLeft":"10rem","borderRadius":"15px"}}>
            <thead>
            <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Title</th>
                <th scope='col'>Author</th>
                <th scope='col'>Genre</th>
                <th scope='col'>Status</th>
                <th scope='col'>Actions</th>
            </tr>
            </thead>
            <tbody>
                {books.map((book)=>(
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>{book.status}</td>
                        <td>
                            <Link to={`/books/update/${book.id}`} state={{editob:book}}>
                            <button type='button' name='edit' id='edit' className='btn btn-primary'>Edit</button>&nbsp;&nbsp;
                            </Link>
                            <button type='button' name='delete' id='delete' className='btn btn-danger' onClick={()=>deletebook(book.id)}>Delete</button>&nbsp;&nbsp;
                            <button type='button' name='status' id='status' className='btn btn-warning' onClick={()=>updatestatus(book.id,book.status)}>Change Status</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
