import React from 'react';
import CardSlider from './CardSlider';

const cards = [
  { name: 'Gin And Tonic', image: 'https://www.thecocktaildb.com/images/media/drink/k0508k1668422436.jpg' },
  { name: 'Margarita', image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg' },
  { name: 'Martini', image: 'https://www.thecocktaildb.com/images/media/drink/qyxrqw1439906528.jpg' },
  // Add more cards as needed
];

const App = () => {
  return (
    <div>
      <CardSlider cards={cards} />
    </div>
  );
};

export default App;