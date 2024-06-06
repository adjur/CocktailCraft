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
  })

  useEffect(() => {
    async function fetchCocktail() {
      try {
        const response = await fetch(randomCocktail)
        const data = await response.json()
        const { idDrink,
          strDrink,
          strAlcoholic,
          strGlass,
          strInstructions,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10 } = data.drinks[0]

        setCocktail({
          idDrink,
          strDrink,
          strAlcoholic,
          strGlass,
          strInstructions,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10
        })
      } catch (error) {
        console.error('Error fetching random cocktail:', error)
      }
    }

    fetchCocktail()
  }, [])

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
                {cocktail.strIngredient1 && <p>◌ {cocktail.strMeasure1} {cocktail.strIngredient1} ◌</p>}
                {cocktail.strIngredient2 && <p>◌ {cocktail.strMeasure2} {cocktail.strIngredient2} ◌</p>}
                {cocktail.strIngredient3 && <p>◌ {cocktail.strMeasure3} {cocktail.strIngredient3} ◌</p>}
                {cocktail.strIngredient4 && <p>◌ {cocktail.strMeasure4} {cocktail.strIngredient4} ◌</p>}
                {cocktail.strIngredient5 && <p>◌ {cocktail.strMeasure5} {cocktail.strIngredient5} ◌</p>}
                {cocktail.strIngredient6 && <p>◌ {cocktail.strMeasure6} {cocktail.strIngredient6} ◌</p>}
                {cocktail.strIngredient7 && <p>◌ {cocktail.strMeasure7} {cocktail.strIngredient7} ◌</p>}
                {cocktail.strIngredient8 && <p>◌ {cocktail.strMeasure8} {cocktail.strIngredient8} ◌</p>}
                {cocktail.strIngredient9 && <p>◌ {cocktail.strMeasure9} {cocktail.strIngredient9} ◌</p>}
                {cocktail.strIngredient10 && <p>◌ {cocktail.strMeasure10} {cocktail.strIngredient10} ◌</p>}
              </div>
               <div className='Cod-instructions'>{cocktail.strInstructions}</div>
            </div>
          </div>
        </div>
      </div>
      <button className='Cod-button'>Find Another</button>
      {/* <Arrow title={'Crowd Pleasers'} link={'#CardSlider'} /> */}
    </section>
  );
}

export default Cod;
