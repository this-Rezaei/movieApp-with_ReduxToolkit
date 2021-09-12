import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  shows: {},
  selectMovieDetail: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    movieDetail: (state, { payload }) => {
      state.selectMovieDetail = payload;
    },
  },
});
export const { addMovies, movieDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow=(state) => state.movies.selectMovieDetail;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
