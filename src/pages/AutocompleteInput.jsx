import React, { useState } from "react";
import AutocompleteRecipeSearch from "../components/AutocompleteRecipeSearch";

const AutocompleteInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  console.log("searchTerm:", searchTerm);

  return (
    <>
      <label>Enter your search term</label>
      <input
        name="searchTerm"
        value={searchTerm}
        type="text"
        placeholder="Start typing..."
        onChange={handleChange}
      />
      <AutocompleteRecipeSearch searchTerm={searchTerm}/>
    </>
  );
};

export default AutocompleteInput;
