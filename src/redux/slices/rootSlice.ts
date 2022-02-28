import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'eagle',
        description: "Redefine what's possible",
        comics_appeared: "Comic 1, COmic 2, Comic 3",
        super_power: 'can see things really far'
        
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.description = action.payload},
        chooseComicAppeared: (state, action) => { state.comics_appeared = action.payload},
        choosePower: (state, action) => { state.super_power = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseComicAppeared, choosePower } = rootSlice.actions;