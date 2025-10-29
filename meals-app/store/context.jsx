import { createContext, useState } from "react";

const FavouriteMeals = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default FavouriteMeals;

function MealContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavoriteMealHandler = (mealId) => {
    setFavoriteMeals((currentFavMeals) => [...currentFavMeals, mealId]);
  };
  const removeFromFavoritesHandler = (mealId) => {
    setFavoriteMeals((currentFavMeals) =>
      currentFavMeals.filter((id) => id !== mealId)
    );
  };
  const value = {
    favoriteMeals,
    addToFavorites: addFavoriteMealHandler,
    removeFromFavorites: removeFromFavoritesHandler,
  };

  return (
    <FavouriteMeals.Provider value={value}>{children}</FavouriteMeals.Provider>
  );
}

export { MealContextProvider };
