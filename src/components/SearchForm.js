import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    //set focus in input after render
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <h2>search form component</h2>
        <label htmlFor="name"> search your favourite cocktail</label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </section>
  );
};

export default SearchForm;
