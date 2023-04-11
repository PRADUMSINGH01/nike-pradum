import React from 'react'
import shoes1 from '../../assets/img.png'

import {BsBagCheck} from 'react-icons/bs';
const Card = ({img, title , price , bg}) => {
  return (
    <>
        <div className={`flex mt-10 justify-around w-[20rem] md:w-[25rem] h-[8rem] md:h-[13rem]  bg-${bg} rounded-lg p-2`}>

            <div className="w-[10rem] flex flex-col justify-between text-white font-bold">
                <div className="text-2xl w-[20rem] capitalize">
                    <h6>{title}</h6>
                </div>
                <div className="">
                    <p>men running shoes</p>
                </div>
                <div className="">
                        {price}
                        *
                    </div>
                <div className="text-2xl text-black w-[9rem] h-[2rem] flex justify-around items-center cursor-pointer rounded-md shadow-2xl ">
                    <div className="bg-white p-2 rounded-xl">
                    <BsBagCheck/>

                    </div>

                
                   <div className="text-sm w-[5rem] h-[2rem] bg-slate-50 rounded-2xl p-1">
                    Buy Now
                   </div>
                   
                </div>


            </div>
            <div className="w-[15rem] flex items-center position">
                <img src={img} alt="" className= '-rotate-[25deg] hover:rotate-[-25] cursor-pointer'/>
            </div>


        </div>
   
    </>
   
  )
}

export default Card