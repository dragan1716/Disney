import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import LargeMovieCard from "./LargeMovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

const MovieList = ({ genreId, movieIndex }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  /*   const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
      console.log("test", res.data.results);
    });
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []); */

  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMovieByGenreId(genreId).then((res) => {
        setMovieList(res.data.results);
        console.log("test", res.data.results);
      });
    };

    getMovieByGenreId();
  }, [genreId]); // genreId je jedina zavisnost

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
        className={`text-white absolute text-[50px] mx-8 cursor-pointer hidden md:block z-50 ${
          movieIndex % 3 === 0 ? "mt-[70px]" : "mt-[180px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide pt-5 px-3 pb-5 scroll-smooth"
      >
        {movieList.map((item) => (
          <React.Fragment key={item.id}>
            {movieIndex % 3 === 0 ? (
              <LargeMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <HiChevronRight
        onClick={slideRight}
        className={`hidden md:block absolute right-0 z-10 top-0 text-white text-[50px] mx-8 cursor-pointer ${
          movieIndex % 3 === 0 ? "mt-[70px]" : "mt-[180px]"
        }`}
      />
    </div>
  );
};

export default MovieList;
