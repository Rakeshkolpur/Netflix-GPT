import { useEffect } from "react";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const getupcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
  };
  useEffect(() => {
    getupcommingMovies();
  }, []);
};

export default useUpcommingMovies;
