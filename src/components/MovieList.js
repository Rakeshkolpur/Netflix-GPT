import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="text-white p-4">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide p-6">
        <div className="flex space-x-4 ">
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
