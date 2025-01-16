import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("upcommingMovies", movies);
  return (
    <div className="bg-black ">
      <div className="-mt-32 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Popular"} movies={movies.popularMovies} />
        <MovieList title={"Up-Comming"} movies={movies.upcommingMovies} />
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
