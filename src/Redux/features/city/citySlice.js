import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: null,
  temperature: null,
  loading: false,
  error: false,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    fetchingCity: (state) => {
      state.loading = true;
    },
    fetchedCity: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    fetchingTemperature: (state) => {
      state.loading = true;
    },
    fetchedTemperature: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    fetchedError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchingCity, fetchedCity, fetchedError } = citySlice.actions;
const cityReducer = citySlice.reducer;
export default cityReducer;
