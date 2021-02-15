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
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  //fetch API data on first render
  useEffect(() => {
    getRecipes();
  }, [query]);

  //fetch call to API, log data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
    `);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //update search state
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
