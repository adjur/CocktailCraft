import React from 'react';
import './CardSlider.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CardSlider = () => {
  return (
    <section id='CardSlider' className='cardSlider'>
      <div id='title-div'>
        <div className='layer1'>
          <h2 id='title'>Tried and True Crowd Pleasers</h2>
        </div>
      </div>
      <div className='main'>
        <div className='scrolling-wrapper'>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
          <div className='card'><h2>Card</h2></div>
        </div>
      </div>
    </section>
  )
}

export default CardSlider;
