import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const error = useMovieTrailer(movieId);

  const youtubeUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`;

  return (
    <div className="relative w-full h-full">
      {error ? (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 text-white">
          <p className="text-xl font-bold">{error}</p>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={youtubeUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
         
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;