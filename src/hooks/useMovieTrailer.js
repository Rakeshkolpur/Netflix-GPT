import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie trailers");
      }
      const json = await response.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return error;
};

export default useMovieTrailer;