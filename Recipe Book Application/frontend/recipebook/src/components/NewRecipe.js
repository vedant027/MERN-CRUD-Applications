import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function NewRecipe() {

    const navigate = useNavigate();
    const [recipe,newrecipe]=useState({
        Title:"",
        Ingredients:"",
        Category:""
    });

    const handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        newrecipe({...recipe,[name]:value})
    }

    const addRecipe = async()=>{
        if(recipe.Title==="" ||
            recipe.Ingredients==="" ||
            recipe.Category===""
        ){
            alert("Please fill all the details!!");
        }
        else{
            let rcp = {
                Title:recipe.Title,
                Ingredients:recipe.Ingredients,
                Category:recipe.Category
            }

            const response = await axios.post("http://localhost:4000/recipe",rcp)
            console.log(response)
            navigate("/")
        }
    }

  return (
    <div>
      <form>
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

        <button type="button" className="btn btn-primary" onClick={addRecipe}>
          Add Task
        </button>
      </form>
    </div>
  );
}
