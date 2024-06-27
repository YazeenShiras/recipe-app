/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/RecipeCard.module.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.recipe_card}>
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
      </div>
  )
}

export default RecipeCard


  