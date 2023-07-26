import { configureStore, createSlice } from "@reduxjs/toolkit";

const plantSlice = createSlice ({
  name:'plant',
  initialState: [],
  reducers: {
    addPlant: (state, action) => {
      const newPlant = {
        name: action.payload.name,
        water: action.payload.water,
        cover: action.payload.cover
      }
      state.push(newPlant);
    },
    deletePlant: (state, action) => {
      state = state.filter((t) => t.id !== action.payload)
      return state
    }
  },
});

export const { addPlant, deletePlant } = plantSlice.actions;

export const store = configureStore({
  reducer: {
    plant: plantSlice.reducer
  }
})
