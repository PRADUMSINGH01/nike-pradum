import React from "react";
import vendor1 from '../../assets/video/vcover1.png'
import vendor2 from '../../assets/video/vcover2.png'
import vendor3 from '../../assets/video/vcover3.png'
import HeroImg from '../../assets/hero.png'

import {FaFacebookMessenger,FaInstagram,FaLinkedinIn ,FaSnapchatSquare} from 'react-icons/fa'
const Home = () => {
  return (
    <div className="w-full h-[30rem]  mt-10 flex justify-around flex-col">
      {/* side */}

      <div className="  ml-10 w-full mt-[8rem] text-6xl md:text-6xl font-bold text-white md:position md:left-96 md:top-0 md:w-[44rem] ">
        <h1>Play With Electric Nike Adapt 2.0 Sneakers</h1>
      </div>

 

       <div className="flex justify-between">


      <div className="flex flex-col justify-around h-[20rem] ml-1 mt-3 md:ml-[20rem]">
        <div className="w-[8rem] h-[6rem] rounded-lg  shadow-xl">
    <img src={vendor1} alt="" />
        </div>
        <div className="w-[8rem] h-[6rem]   rounded-lg  shadow-xl">
        <img src={vendor2} alt="" className="object-fill" width={200}/>
        </div>
        <div className="w-[8rem] h-[6rem]   rounded-lg  shadow-xl">
        <img src={vendor3} alt="" />
        </div>
      </div>
      {/* mid */}
   <div className="flex flex-col justify-around w-[10rem] h-[20rem]">

    <div className="w-[8rem] h-[2rem] md:w-[20rem] md:h-[3rem] md:p-2 md:text-2xl mt-10 bg-white text-center rounded-xl shadow shadow-gray-100  hover:shadow-2xl cursor-pointer">
      <p>explore product</p>
    </div>
    <div className="flex items-center lg:w-[44rem] h-[20rem]">
    <img src={HeroImg} alt="" className="w-auto h-[45vh] lg:h-[13rem] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-contain" />
   </div>

   </div>

 


      {/* social */}
      <div className="flex flex-col md:w-[10rem] justify-around h-[10rem] mr-2 text-2xl mt-3 text-white">
        <div className="w-[2rem] h-[5rem] hover:ease-out hover:duration-700 hover:shadow-2xl cursor-pointer ">
          <FaLinkedinIn/>
        </div>
        <div className="w-[2rem] h-[5rem]">
          <FaFacebookMessenger/>
        </div>
        <div className="w-[2rem] h-[5rem] ">
          <FaInstagram/>
        </div>
        <div className="">
        <FaSnapchatSquare/>
        </div>
      </div>


    </div>

   
</div>
  );
};

export default Home;
