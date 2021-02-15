import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";

//App function component
const App = () => {
  //API keys
  const APP_ID = "2297f343";
  const APP_KEY = "50ce8dfaed3ee54874588ee166e66381";

  //state variable
  const [recipes, setRecipes] = useState([]);

  //fetch API data on first render
  useEffect(() => {
    getRecipes();
  }, []);

  //fetch call to API, log data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
    `);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
