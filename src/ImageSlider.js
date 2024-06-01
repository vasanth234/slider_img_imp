import React, { useState } from 'react';
import './imageslider.css'
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <div className='text'>
            <h2>Image slider</h2>
      </div>
      <div className='Contain-all'>
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentIndex]} alt="slide" />
      <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
