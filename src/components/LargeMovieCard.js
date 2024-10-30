import React from "react";
import { IMAGE_BASE_URL } from "../constant/ImagePath";

const LargeMovieCard = ({ movie }) => {
  return (
    <div>
      <img
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title}
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 text-center">
        {movie.title}
      </h2>
    </div>
  );
};

export default LargeMovieCard;
