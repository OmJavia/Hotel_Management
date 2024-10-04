import React from 'react';
import './Image.css';
import Cards from './Cards';
const Image = () => {
  return (
    <>
        <div className="image-container">
        <div className="overlay">
            <h1 className="welcome-text">Welcome to heaven on earth...</h1>
        </div>
        </div>
        <Cards/>
    </>
  );
};

export default Image;
