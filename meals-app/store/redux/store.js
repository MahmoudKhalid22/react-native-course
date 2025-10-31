import {ConfigureStore} from '@reduxjs/toolkit'
import favoriteReducer from './favorites.js'
export const store = ConfigureStore({

    reducer: {
        favoriteMeals: favoriteReducer,

    }

})