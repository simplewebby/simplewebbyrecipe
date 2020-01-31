import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Recipe from "./Recipe";


const App = () => {

const id = '';
const key = '';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery ] = useState('ice-cream');
  
    useEffect(() => {
    getRecipes()
  },[query]);

    const getRecipes = async() => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);


    const data = await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
  	};

    const updateSearch = e =>  {
      setSearch(e.target.value);
      console.log(search);
    }
    
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');

    }
    return (
     <div className="App">
      <div className="container">
      <Header text="Recipes" />
     
        <form onSubmit={getSearch} className="form-inline">
          <input type="text" 
                  className="form-control mr-md-6"
                  value={search} 
                  onChange={updateSearch}/>
          <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form><br></br>
        <div className="row">
        {recipes.map(recipe => (
          <div className="col-6 col-md-4">
          <Recipe 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
          url={recipe.recipe.url}

          />
          </div>
         
        ))}
        </div>
       
      </div>
    </div>
  );
};


export default App;
