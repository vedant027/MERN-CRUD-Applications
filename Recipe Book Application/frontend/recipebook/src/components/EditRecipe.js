import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditRecipe() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [recipe,editrecipe] = useState({
        ID:"",
        Title:"",
        Ingredients:"",
        Category:""
    });

    const handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        editrecipe({...recipe,[name]:value})
    }

    useEffect(()=>{
        editrecipe({...location.state.editob})
    },[])

    const updateRecipe=async()=>{
        const response = await axios.put("http://localhost:4000/recipe/"+recipe.ID,recipe)
        console.log(response);
        navigate("/")
    }

  return (
    <div>
        <form>
        <div className="form-group">
          <label htmlFor="ID">ID</label>
          <input
            type="text"
            className="form-control"
            id="ID"
            name="ID"
            onChange={handleChange}
            value={recipe.ID}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            onChange={handleChange}
            value={recipe.Title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Ingredients">Ingredients</label>
          <input
            type="text"
            className="form-control"
            id="Ingredients"
            name="Ingredients"
            onChange={handleChange}
            value={recipe.Ingredients}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            onChange={handleChange}
            value={recipe.Category}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={updateRecipe}>
          Update Recipe
        </button>
      </form>
    </div>
  )
}
