import React from "react";
import { MdOutlinePublicOff } from "react-icons/md";
import { MdLocalActivity } from "react-icons/md";
import "./banner.css";

function Banner() {
  return (
    <div className="banner-img h-[85vh] bg-gray-300">
      <div className="relative z-10 text-white h-full">
        <div className="h-full w-full flex items-center justify-center px-20">
          <div className="">
            <h1 className="text-center text-wrap text-3xl md:text-5xl lg:text-7xl  font-extrabold">
              Effective Learing on <br /> Solar Energy Technologies
            </h1>
            <p className="mt-5 text-lg md:text-xl text-center text-wrap ">
              {" "}
              Effective Learing on Solar Energy Technologies through
              Mobile-Research-Labratory <br /> for Secondary Schools In Urban and Rural
              Areas
            </p>
            <div className="mt-10 w-full h-full grid md:flex items-center justify-center gap-5">
              <button className="flex items-center text-2xl font-bold bg-yellow-800 border-2 border-yellow-800 text-white px-8 py-3 rounded-3xl duration-500 hover:duration-500 hover:cursor-pointer hover:border-yellow-800 hover:bg-transparent hover:text-white">
                <span>ACTIVITIES</span> <MdLocalActivity className="ml-4" />
              </button>
              <button className="flex items-center text-2xl font-bold bg-transparent border-2 border-white text-gwhite px-8 py-3 rounded-3xl duration-500 hover:duration-500 hover:cursor-pointer hover:bg-blue-800 hover:border-blue-800 hover:text-white">
                <span>PUBLICATIONS</span>{" "}
                <MdOutlinePublicOff className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
