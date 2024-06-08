import React from 'react';
import './Cod.css'
import Arrow from '../Arrow/Arrow'
import { useState, useEffect } from 'react';
const randomCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'


const Cod = () => {
  const [cocktail, setCocktail] = useState({
    idDrink: '',
    strDrink: '',
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: '',
    strMeasure8: '',
    strMeasure9: '',
    strMeasure10: '',
  });

  // Ensure fetchCocktail is defined before its first use.
  const fetchCocktail = async () => {
    try {
      const response = await fetch(randomCocktail);
      const data = await response.json();
      setCocktail(data.drinks[0]); // Assuming data.drinks[0] is valid and has data.
    } catch (error) {
      console.error('Error fetching random cocktail:', error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <section id='Cod' className='cod'>
      <div className='Cod-title-div'>
        <div className='Cod-layer1'>
          <h2 className='Cod-titles'>Find a New Cocktail</h2>
        </div>
      </div>
      <div className='Cod-cardBox'>
        <div className='Cod-bodyCard'>
          <div className='Cod-layer2'>
            <div className='Cod-pictureBox'>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}>
              </img>
            </div>

            <div className='Cod-details'>
              <div className='Cod-name'><p>{cocktail.strDrink}</p></div>

              <div className='Cod-ingredients'>
                {cocktail.strIngredient1 && <p>◌ <strong>{cocktail.strMeasure1}</strong> {cocktail.strIngredient1} ◌</p>}
                {cocktail.strIngredient2 && <p>◌ <strong>{cocktail.strMeasure2}</strong> {cocktail.strIngredient2} ◌</p>}
                {cocktail.strIngredient3 && <p>◌ <strong>{cocktail.strMeasure3}</strong> {cocktail.strIngredient3} ◌</p>}
                {cocktail.strIngredient4 && <p>◌ <strong>{cocktail.strMeasure4}</strong> {cocktail.strIngredient4} ◌</p>}
                {cocktail.strIngredient5 && <p>◌ <strong>{cocktail.strMeasure5}</strong> {cocktail.strIngredient5} ◌</p>}
                {cocktail.strIngredient6 && <p>◌ <strong>{cocktail.strMeasure6}</strong> {cocktail.strIngredient6} ◌</p>}
                {cocktail.strIngredient7 && <p>◌ <strong>{cocktail.strMeasure7}</strong> {cocktail.strIngredient7} ◌</p>}
                {cocktail.strIngredient8 && <p>◌ <strong>{cocktail.strMeasure8}</strong> {cocktail.strIngredient8} ◌</p>}
                {cocktail.strIngredient9 && <p>◌ <strong>{cocktail.strMeasure9}</strong> {cocktail.strIngredient9} ◌</p>}
                {cocktail.strIngredient10 && <p>◌ <strong>{cocktail.strMeasure10}</strong> {cocktail.strIngredient10} ◌</p>}
              </div>
              <div className='Cod-instructions'>{cocktail.strInstructions && cocktail.strInstructions}</div>
            </div>
          </div>
        </div>
      </div>
      <button className='Cod-button' onClick={fetchCocktail}>Find Another</button>
      <div className='Cod-arrow-container'></div>
    </section>
  );
}

export default Cod;
