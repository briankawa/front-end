import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const mealData = data.meals[0];
        setMeal(mealData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array ensures that the effect runs once on mount

  return (
    <div className="App">
      <header>
        <h1>My Recipe Website</h1>
        
      </header>

      <section className="about-me">
        <h2>About me</h2>
        <p>Hi There! I'm [Brian Kawa], and I'm passionate about sharing delicious recipes with you. I love baking and cooking, and I'm excited to help you discover the joy of preparing homemade meals and treats.</p>

        <h3>Connect with me:</h3>
        <ul>
          <li>Find me on <a href="https://www.instagram.com/brian2_wavyy/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <h3>Contact Information</h3>
          <p>If you have any questions or just want to say hello, you can reach me at [brianjimmy59@gmail.com], or [0742280449]. I'd love to hear from you.</p>
        </ul>
      </section>

      <main>
        {meal && (
          <Recipe
            title={meal.strMeal}
            imageUrl={meal.strMealThumb}
            instructions={meal.strInstructions}
          />
        )}
      </main>
    </div>
  );
}

export default App;






