import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
