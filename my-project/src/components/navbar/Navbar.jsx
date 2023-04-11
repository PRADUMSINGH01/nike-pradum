import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

import {FiHeart} from 'react-icons/fi';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const quantityItems = 0;

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScrool = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScrool);

    return () => {
      window.removeEventListener("scroll", onNavScrool);
    };
  }, []);

  return (
   
        <nav className="flex sticky top-0 left-0 items-center justify-between w-full">
          <div className="  ">
            <img src={logo} alt="logo" height={15} width={65} />
          </div>

          <div className="flex justify-between w-[8rem] text-white text-3xl mr-1">

         <div className="">
               <AiOutlineSearch/>
            
         </div>

             <div className="">
               <FiHeart/>
            
         </div>

         <div className="">
               <BsBagCheck/>
            
         </div>

 

          </div>
        </nav>
    
  );
};

export default Navbar;
