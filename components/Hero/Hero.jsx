import React from 'react'
import './Hero.css'
import NavBar from '../NavBar/NavBar'

const Hero = () => {
  return (
    <section id='Hero' className='hero'>
      <NavBar />
      <div id='title-div'>
        <div className='layer1'>
          <h1 id='title'>Cocktail Craft</h1>
        </div>
      </div>
      <div className='cardBox'>
          <div className='bodyCard'>
            <div className='layer2'>

            </div>
          </div>
      </div>
    </section>
  );
}


export default Hero