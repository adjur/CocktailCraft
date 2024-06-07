import React from 'react';
import './CardSlider.css';
import { useState } from 'react';
import Arrow from '../Arrow/Arrow'



import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardSlider = () => {



  return (
    <section id='CardSlider' className='cardSlider'>
      <div className='slider-title-div'>
        <div className='slider-layer1'>
          <h2 className='slider-title'>Tried and True Crowd Pleasers</h2>
        </div>
      </div>
      {/* <div className='favoritesContainer'>
<div className='favoriteBox'>
  <div className='favoriteCArd'></div>
</div>
      </div> */}
      <div className='scroll-container'>
        <div className='keyboard-left-icon'>
          <KeyboardArrowLeftIcon />
        </div>
        <div className='scrolling-wrapper'>
          <div className='scrollCard'>
            <div className='drink-name'>Gin And Tonic</div>
            <img src='{image}' className='cardImage'></img>
          </div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
          <div className='scrollCard'><img src='https://www.thecocktaildb.com/images/media/drink/k0508k1668422436.jpg' className='cardImage'></img></div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
          <div className='scrollCard'><img src='{image}' className='cardImage'></img></div>
        </div>
        <div className='keyboard-right-icon'>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className='scrollArrow'>
        {/* <Arrow /> */}
      </div>

    </section>
  )
}

export default CardSlider;
