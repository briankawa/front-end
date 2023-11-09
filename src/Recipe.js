import React from 'react';

const Recipe = ({ title, imageUrl, instructions }) => {
  return (
    <section className="recipe">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />

      <div>
        <h3>Instructions:</h3>
        <p>{instructions}</p>
      </div>
    </section>
  );
};

export default Recipe;
