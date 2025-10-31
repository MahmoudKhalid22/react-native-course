import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites.js";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
