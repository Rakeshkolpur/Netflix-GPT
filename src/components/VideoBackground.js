import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  const youtubeUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <iframe
        className=" absolute top-0 left-0 w-full h-full"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
