// RecipesList.tsx
import React, { useEffect, useState } from 'react';
import { fetchMeals } from './api';
import RecipeCard from './RecipeCard';

const RecipesList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMeals();
      setMeals(data.meals);
      setLoading(false);
    };

    getMeals();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="recipes-list">
      {meals.map((meal: any) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default RecipesList;
