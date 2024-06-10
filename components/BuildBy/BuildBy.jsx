import React, { useState } from 'react';
import './BuildBy.css';
// const ingredientSearch = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${}`


const BuildBy = () => {
  const [selectedAlcohols, setSelectedAlcohols] = useState([]);
  const [cocktailRecipes, setCocktailRecipes] = useState([]);

  const alcohols = [
    'Absinthe', 'Brandy', 'Cachaça', 'Cognac', 'Gin', 'Mezcal', 'Pisco',
    'Rum', 'Tequila', 'Vodka', 'Whiskey', 'Vermouth'
  ];

  const toggleAlcoholSelection = (alcohol) => {
    setSelectedAlcohols(prevState => {
      if (prevState.includes(alcohol)) {
        return prevState.filter(item => item !== alcohol);
      } else {
        return [...prevState, alcohol];
      }
    });
  };

  const fetchCocktailRecipes = async () => {
    const apiUrl = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohols}`;
    const response = await fetch(`${apiUrl}?alcohols=${selectedAlcohols.join(',')}`);
    const data = await response.json();
    setCocktailRecipes(data);
  };

  return (
    <section id='BuildBy' className='buildBy'>
      <div className='buildBy-titles-div'>
        <div className='buildBy-layer1'>
          <h2 className='buildBy-titles'>Work With What You Have</h2>
        </div>
      </div>
      <div className='buildBy-detailsParagraph'>
        <p className='buildBy-package-details'>
          Build a drink with the ingredients you have at home!
        </p>
        <div className='buildBy-body'>
          {/* <button className='fetch-recipes-button' onClick={fetchCocktailRecipes}>
            Find Recipes
          </button> */}
          {cocktailRecipes.length > 0 && (
            <div className='recipe-list'>
              <h3>Available Recipes</h3>
              <ul>
                {cocktailRecipes.map((recipe, index) => (
                  <li key={index} className='recipe-item'>
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='results-card'>
        <div className='results-layer'>
          <div className='left-side-card'>
            <div>

            </div>
            <button className='fetch-recipes-button' onClick={fetchCocktailRecipes}>
              Find Recipes
            </button>
          </div>
          <div className='right-side-card'>

</div>
        </div>
      </div>
    </section>
  );
};

export default BuildBy;
