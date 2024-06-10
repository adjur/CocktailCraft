import React, { useRef } from 'react';
import './CardSlider.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from '../NavBar/NavBar'

const CardSlider = ({ cardData }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (direction === 'left') {
      scrollRef.current.scrollBy({
        left: Math.max(-300, -scrollLeft), // Ensure not to scroll beyond start
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scrollBy({
        left: Math.min(300, maxScrollLeft - scrollLeft), // Ensure not to scroll beyond end
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='CardSlider' className='cardSlider'>
      <div className='slider-title-div'>
        <div className='slider-layer1'>
          <h2 className='slider-title'>Tried and True Crowd Pleasers</h2>
        </div>
      </div>
      <div className='scroll-container'>
        <div className='keyboard-left-icon' onClick={() => scroll('left')}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className='scrolling-wrapper' ref={scrollRef}>
          {cardData.map((card, index) => (
            <div key={index} className='scrollCard'>
              <div className='card-inner'>
                <div className='card-front'>
                  <img src={card.image} alt={card.title} className='cardImage' />
                  <div className='drink-name'>{card.title}</div>
                </div>
                <div className='card-back'>
                  <div className='drink-name'>{card.title}</div>
                  <div className='drinkIngre-details'>
                    {Object.keys(card).filter(key => key.startsWith('strIngredient')).map((key, idx) => (
                      <div key={key}>
                        <span className="ingredient-measure">◌ <span className='ingre'>{card[`strMeasure${idx + 1}`]}</span> {card[key]} ◌</span>
                      </div>
                    ))}
                  </div>
                  <div className='drinkInstr'>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='keyboard-right-icon' onClick={() => scroll('right')}>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </section>
  );
};

export default CardSlider;