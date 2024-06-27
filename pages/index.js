import { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import RecipeCard from '../components/RecipeCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const apiKey = "d46976d0284549c08ef217ee1fc509a3";
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
    const response = await axios.get(url);
    setRecipes(response.data.results);
  };

  return (
    <div className={styles.container}>
      <h1>Recipe Finder</h1>
      <SearchForm onSearch={fetchRecipes} />
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <p>Created by Muhammed Yaseen with Next.js and Spooncular API</p>
    </div>
  );
}
