import React from 'react'
import './Hero.css'
import NavBar from '../NavBar/NavBar'
import Arrow from '../Arrow/Arrow';

const Hero = () => {
  return (
    <section id='Hero' className='hero'>
      <NavBar />
      <div id='titles-div'>
        <div className='layer1'>
          <h1 id='titles'>Welcome to Cocktail Craft</h1>
        </div>
      </div>
      <div className='cardBox'>
        <div className='bodyCard'>
          <div className='layer2'>
            <p className='intro'>
              Discover the perfect cocktail recipes with the ingredients you have at home</p>
              <p></p>
              <p className='intro'>Make our Cocktail of the Day</p> 
              <p></p>
              <p className='intro'>Explore our exclusive packages that include everything you need to craft exquisite cocktails.
            </p>
          </div>
        </div>
      </div>
      <Arrow title='Get Mixing!' link='#BuildBy'/>
    </section>
  );
}


export default Hero