import React from "react";

const Recipe = ({title, calories, image, ingredients, url}) => {
  
  return (
   
          <div className="card">
            <img className="card-img-top" src={image} alt=""/>
            <div className="card-body">
              <h5 className="card-text">{title}</h5>
              <p className="card-text">Calories: {calories.toFixed(0)} cal/serving</p> 
              <ol>
                <h6>Ingredients:</h6>
                {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
                ))}
              </ol>
             <a type="button" className="btn btn-primary" href={url} >See More</a>
          </div>
   </div>
   
  
  );
};


export default Recipe;