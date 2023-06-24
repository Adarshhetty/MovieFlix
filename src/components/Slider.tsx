import React, { useEffect, useState } from "react";
import Globalapi from "../services/Globalapi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const Slider = () => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState<any[]>([]);
  const elementRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const sliderRight = (element: any) => {
    element.scrollLeft += window.innerWidth - 80;
  };
  const sliderLeft = (element: any) => {
    element.scrollLeft -= window.innerWidth - 80;
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    //GlobalApi call
    Globalapi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);

      setMovies(resp.data.results);
    });
  };
  return (
    <div>
      <HiChevronLeft
        className=" hidden md:block text-white text-[35px] absolute mx-8 mt-[200px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className=" hidden md:block text-white text-[35px] absolute mx-8 mt-[200px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-3 scrollbar-none scroll-smooth"
        ref={elementRef}>
        {movies.map((item) => (
          <img
            src={IMAGE_URL + item.backdrop_path}
            className="min-w-full md:h-[370px] object-cover object-left-top mr-12 rounded-md hover:border-[4px] border-gray-200 transition-all duration-150 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
