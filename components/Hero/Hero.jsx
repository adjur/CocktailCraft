import React from 'react'
import './Hero.css'
import NavBar from '../NavBar/NavBar'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
      <div className='hero-arrowSection'>
        <a href='#BuildBy' className='hero-arrowContainer'>
          <div className='hero-arrowIcon'>
            <ArrowDownwardIcon className='hero-arrow-icon' />
          </div>
        </a>
      </div>
    </section >
  );
}


export default Hero