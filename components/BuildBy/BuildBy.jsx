import React, { useState } from 'react';
import './BuildBy.css';

const BuildBy = () => {
  const [formData, setFormData] = useState({ ingredient: '' });
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const fetchCocktailRecipes = async (event) => {
    event.preventDefault();  // Prevent the form from actually submitting
    const { ingredient } = formData;
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCocktails(data.drinks);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCocktailSelect = async (cocktail) => {
    const detailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`;
    const response = await fetch(detailsUrl);
    const data = await response.json();
    setSelectedCocktail(data.drinks[0]);  // Assuming the API returns an array of drinks
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
      </div>
      <form className='results-card' onSubmit={fetchCocktailRecipes}>
        <div className='results-layer'>
          <div className='left-side-card'>
            <label className='searchByLabel'>Search by Ingredient:</label>
            <input className="search-input" type="text" placeholder="Gin, Sugar, Lemon..." id="ingredient" name="ingredient" required onChange={handleInputChange} value={formData.ingredient} />
            <button className='fetch-recipes-button' type="submit">
              Find Recipes
            </button>
            <div className="cocktail-list">
              {cocktails.map(cocktail => (
                <p key={cocktail.idDrink} onClick={() => handleCocktailSelect(cocktail)}>
                  ◌ {cocktail.strDrink}
                </p>
              ))}
            </div>
          </div>
          <div className='right-side-card'>
            {selectedCocktail && (
              <div>
                <h3 className='right-drinkName'>{selectedCocktail.strDrink}</h3>
                <img className='drinkThumb' src={selectedCocktail.strDrinkThumb} alt={selectedCocktail.strDrink} />
                <div className='drink-ingredients'>
                  {[...Array(15)].map((_, index) => {
                    const ingredientKey = `strIngredient${index + 1}`;
                    const measureKey = `strMeasure${index + 1}`;
                    return selectedCocktail[ingredientKey] ? (
                      <p key={index}>◌ <strong>{selectedCocktail[measureKey]}</strong> {selectedCocktail[ingredientKey]} ◌</p>
                    ) : null;
                  })}
                </div>
                {selectedCocktail.strInstructions && (
                  <div className='cocktail-instructions'>
                    <p>{selectedCocktail.strInstructions}</p>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </form>
    </section>
  );
};

export default BuildBy;
