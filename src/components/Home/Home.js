import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/MovieSlice/MovieSlice";
const Home = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    const movieTitle = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${ApiKey}&?plot=full&s=${movieTitle}&type=movie`)
        .catch((err) => {
          console.log("error", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <>
      <div className="banner-img">
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
