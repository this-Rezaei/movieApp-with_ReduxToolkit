import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/MovieSlice/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
console.log(movies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "true" ? (
      movies.Search.map((movie, index) =>
          <MovieCard key={index} data={movie} />
        
      )
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wraper">
      <div className="moveie-list">
        <h2>Movies</h2>
        <div className="movei-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
