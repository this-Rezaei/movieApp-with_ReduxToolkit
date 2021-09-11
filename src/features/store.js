import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MovieSlice/MovieSlice";
export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});
