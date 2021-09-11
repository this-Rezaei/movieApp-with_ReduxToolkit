import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

const Home = () => {
    useEffect(() => {
        const fetchMovies = async () => {
            const movieTitle = "Harry";
            const response = await movieApi
                .get(`?apikey=${ApiKey}&s=${movieTitle}&type=movie`)
                .catch((err) => {
                    console.log("error", err);
                });
            console.log(response);
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
