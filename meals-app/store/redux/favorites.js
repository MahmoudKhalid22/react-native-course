import {createSlice} from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [
        ids: []
    ],
    reducers: {
        addToFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFromFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id));
        }
    }

})

export const addToFavorite = favoritesSlice.action.addToFavorite;
export const removeFromFavorite = favoritesSlice.action.removeFromFavorite;
export default favoritesSlice.reducer;