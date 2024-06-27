import { useState } from "react";
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.input_form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a recipe name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
