import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { IMAGE_BASE_URL } from "../constant/ImagePath";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const slideLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  };

  const slideRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        onClick={slideLeft}
        className="text-white absolute text-[30px] mx-8 mt-[150px] cursor-pointer  hidden md:block"
      />
      <HiChevronRight
        onClick={slideRight}
        className="text-white absolute right-0 text-[30px] mx-8 mt-[150px] cursor-pointer  hidden md:block"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto  w-full px-16 py-4 scroll-smooth scrollbar-hide"
      >
        {movieList.map((movie) => (
          <img
            key={movie.id}
            className="min-w-full w-[520px] h-[310px] object-cover object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
            src={IMAGE_BASE_URL + movie.backdrop_path}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
