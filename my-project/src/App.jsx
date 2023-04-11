import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Card from "./components/cart/Card";
import HighLight from "./components/hightlight/HighLight";
import MainCart from "./components/Main/MainCart";

const App = () => {
  return (
    <div className="h-[46rem] bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <Navbar />
      <Home />

      <div className="mt-40 flex flex-col justify-around md:flex-row  items-center">
        <Card
          bg={
            "gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500"
          }
        />
        <Card bg={"gradient-to-b from-blue-600 to-blue-500"} />
        <Card bg={"gradient-to-b from-violet-500 to-indigo-500"} />
      </div>

<div className="mt-20">

      <HighLight/>
</div>
      

      <div className="bg-white md:flex flex  flex-wrap justify-between w-full h-[140rem] md:h-[36rem] items-center ml-5">

        <MainCart bg={'gradient-to-b from-sky-600 to-indigo-600'}/>
        <MainCart bg={'gradient-to-b from-gray-900 to-yellow-500'}/>
        <MainCart bg={'gradient-to-b from-blue-500 to-cyan-500'}/>
        <MainCart bg={'gradient-to-b from-yellow-500 to-yellow-500'}/>
        <MainCart bg={'gradient-to-b from-indigo-700 to-indigo-700'}/>
        <MainCart bg={'gradient-to-b from-blue-500 to-cyan-500'}/>
        <MainCart bg={'gradient-to-b from-yellow-500 to-yellow-500'}/>
        <MainCart bg={'gradient-to-b from-indigo-700 to-indigo-700'}/>


      </div>
      
      <div className="">
         <HighLight/>
      </div>
      

<div className="w-full h-[20rem] bg-indigo-600">


  foooter
</div>

          </div>
  );
};

export default App;
