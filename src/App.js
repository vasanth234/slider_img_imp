import React from 'react';
import ImageSlider from './ImageSlider';

const App = () => {
  const images = [
    'https://fastly.picsum.photos/id/433/200/300.jpg?hmac=Y75_deyseM49Q8smDAbeRflgTmOchUngpd-QeDllW0g',
    'https://fastly.picsum.photos/id/912/250/350.jpg?hmac=RRZvBRsCQL8540A_HEr6U6_5FiJb0SbvbZB9Y6d_aTE',
    
  ];

  return (
    <div className="app">
      
      <ImageSlider images={images} />
    </div>
  );
};

export default App;