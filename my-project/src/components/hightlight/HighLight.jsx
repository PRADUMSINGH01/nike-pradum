import React from "react";
import img from "../../assets/h.png";
const HighLight = () => {
  return (
    <div className="flex flex-col h-[30rem] md:h-[40rem] justify-around items-center w-full bg-white md:flex-row">
      <div className="w-full">
        <img src={img} alt="" className="rotate-[20deg] hover:-rotate-12" />
      </div>
      <div className="w-full flex flex-col text-center items-center">
        <div className="">
          <h1 className="text-blue-600 text-2xl md:text-6xl">HIGHLIGHTS</h1>
        </div>
        <div className="text-gray-950 text-xl">
          <h1>NIKE AIR WITH LIMITLESS CHOICES</h1>
        </div>
        <div className="mt-5 text-cyan-800 capitalize">
          <p>
            Our Purpose is to move the world forward. We take action by building
            community, protecting our planet and increasing access to sport.
          </p>
        </div>

        <div className="text-center cursor-pointer mt-10">
            <div className="w-[5rem] h-[2rem] md:w-[15rem] md:h-[2.5rem]  md:text-2xl text-white bg-slate-950 text-center p-1 rounded-2xl shadow-2xl ">Explore </div>
        </div>


      </div>
    </div>
  );
};

export default HighLight;
