import React from "react";

import disney from "../assets/images/disney.png";
import pixar from "../assets/images/pixar.png";
import marvel from "../assets/images/marvel.png";
import starwar from "../assets/images/starwar.png";
import nationalG from "../assets/images/nationalG.png";

import starwarV from "../assets/Videos/star-wars.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import disneyV from "../assets/Videos/disney.mp4";
import nationalGeographicV from "../assets/Videos/national-geographic.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800"
        >
          <video
            className="absolute w-full top-0 rounded-md z-0 opacity-0 hover:opacity-50"
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <img
            className="w-full z-[1]"
            src={item.image}
            alt="production house"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
