import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPtSearch from "./GPtSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPtSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
