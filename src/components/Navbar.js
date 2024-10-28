import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiHome, HiOutlineSearch, HiDotsVertical } from "react-icons/hi";
import { HiOutlinePlus, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="p-5 flex text-white justify-between">
      <div className="flex">
        <img src={logo} alt="logo" className="w-[80px] md:w-[115px]" />
        {/*Header on big screen */}
        <div className="md:flex gap-4 lg:gap-8 hidden ">
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiHome className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">Home</h2>
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiOutlineSearch className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">
              Search
            </h2>
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiOutlinePlus className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">
              Watch list
            </h2>
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiStar className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">
              Originals
            </h2>
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiPlayCircle className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">
              Movies
            </h2>
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiTv className="mr-2" />
            <h2 className="uppercase font-semibold text-xs lg:text-lg">
              Series
            </h2>
          </div>
        </div>

        {/*Header on small screen */}
        <div className="flex md:hidden gap-4 lg:gap-8">
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiHome className="mr-2" />
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiOutlineSearch className="mr-2" />
          </div>
          <div className="flex items-center cursor-pointer hover:underline underline-offset-8">
            <HiOutlinePlus className="mr-2" />
          </div>
          <div onClick={toggleMenuHandler} className="flex items-center">
            <HiDotsVertical />
            {toggleMenu ? (
              <div className="absolute p-4 top-14 border border-gray-400 bg-[#121212]">
                <div className="flex items-center pb-4 hover:underline underline-offset-8">
                  <HiStar className="mr-2" />
                  <h2 className="uppercase font-semibold text-sm">Originals</h2>
                </div>
                <div className="flex items-center pb-4 hover:underline underline-offset-8">
                  <HiPlayCircle className="mr-2" />
                  <h2 className="uppercase font-semibold text-sm">Movies</h2>
                </div>
                <div className="flex items-center pb-4 hover:underline underline-offset-8">
                  <HiTv className="mr-2" />
                  <h2 className="uppercase font-semibold text-sm">Series</h2>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="avatar"
        className="w-[40px] rounded-full object-cover cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
