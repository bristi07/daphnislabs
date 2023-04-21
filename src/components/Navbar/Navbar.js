import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../SearchComponent";
function Navbar() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  };

  return (


    <div className=" flex justify-between w-full px-8  h-20 items-center  text-black bg-gradient-to-b from-blue-900 to-blue-400">
      <div className="flex">
        <button className="px-1 font-mono text-l text-slate-800" onClick={handleClick}>Daphnis Labs</button>
      </div>
      <div className="flex items-center font-medium justify-around">
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          {/* <NavLinks /> */}
          {/* <div className=" flex justify-end  w-36 my-4 mx-10 border-spacing-3 border-solid "> */}
          

          <li>
            {/* <input className="border-solid" type="text" placeholder="Search Products" /> */}
<SearchComponent/>
          </li>

        </ul>

      </div>
    </div>
  );
}

export default Navbar;
