import { useEffect, useState } from "react";
import styled from "styled-components";

function AutocompleteRecipeSearch({ searchTerm }) {
  const [matchingRecipes, setMatchingRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
      );
      const recipes = await data.json();
      console.log("recipes:", recipes);
      setMatchingRecipes(recipes);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };
  useEffect(() => {
    // Check if searchTerm exists and is not an empty string before making the API call
    if (searchTerm && searchTerm.trim() !== "") {
      // Wait before making the API call
      const delay = 500; // 0.5 seconds
      const timeoutId = setTimeout(() => {
        getRecipes();
      }, delay);

      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if searchTerm changes
    }
  }, [searchTerm]);

  return (
    <Grid>
      {matchingRecipes.map((item) => {
        return <p key={item.id}>Recipe: {item.title}</p>;
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export default AutocompleteRecipeSearch;
