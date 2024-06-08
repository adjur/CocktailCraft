import React from 'react';
import './Packages.css';
import ToTopArrow from '../ToTopArrow/ToTopArrow';

const Packages = () => {
  return (
    <section id='Packages' className='packages'>
      <div className='package-titles-div'>
        <div className='package-layer1'>
          <h1 className='package-titles'>Packages to Host</h1>
        </div>
      </div>
      <div className='detailsParagraph'>
        <p className='package-details'>
          Comprehensive packages that include everything needed to craft delicious cocktails and entertain your guests, except the alcohol.
        </p>
        <p className='package-details'>
          Each package includes premium mixers, reusable recipe cards, and fresh fruit delivered right to your doorstep, ensuring your party is a hit without the hassle.
        </p>
      </div>
      <div className='parentPackage'>
        <div className='pack pack1'>
          <div className='pack-content-wrapper'>
            <h3 className='pack-title'>Intimate Indulgence</h3>
            <p className='pack-description'>For gatherings of <strong>2-4</strong></p>
            <ul className='pack-items'>
              <li>◌ A variety of premium mixers ◌</li>
              <li>◌ Fresh fruit for garnishing ◌</li>
              <li>◌ Easy-to-follow recipe cards for a selection of cocktails ◌</li>
            </ul>
            <p className='pack-description'>$60.00</p>
            <a href="#" className="pack-button">Buy Package</a>
          </div>
        </div>
        <div className='pack pack2'>
          <div className='pack-content-wrapper'>
            <h3 className='pack-title'>Social Soiree</h3>
            <p className='pack-description'>For gatherings of <strong>6-8</strong></p>
            <ul className='pack-items'>
              <li>◌ An expanded range of premium mixers ◌</li>
              <li>◌ A generous selection of fresh fruit ◌</li>
              <li>◌ Additional recipe cards featuring more cocktail options ◌</li>
            </ul>
            <p className='pack-description'>$80.00</p>
            <a href="#" className="pack-button">Buy Package</a>
          </div>
        </div>
        <div className='pack pack3'>
          <div className='pack-content-wrapper'>
            <h3 className='pack-title'>Grand Gala</h3>
            <p className='pack-description'>For gatherings of <strong>10-12</strong></p>
            <ul className='pack-items'>
              <li>◌ A comprehensive assortment of premium mixers ◌</li>
              <li>◌ A plentiful supply of fresh fruit ◌</li>
              <li>◌ An extensive collection of recipe cards for a wide variety of cocktails ◌</li>
            </ul>
            <p className='pack-description'>$120.00</p>
            <a href="#" className="pack-button">Buy Package</a>
          </div>
        </div>
      </div>
      <div>
        <ToTopArrow />
      </div>
    </section>
  );
};

export default Packages;