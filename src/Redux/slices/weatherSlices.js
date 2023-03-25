import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action
export const fetchedWeather = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=cf75f18af860230d8ee7c926c04aac33`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// slice
const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchedWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchedWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.weather = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchedWeather.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});
export default weatherSlice.reducer;
