import React from "react";
import YGO from "./YGO.js";
import YGO2 from "./YGO2.js";
import FrontPic from "./MyPic.js"

export default function Flippy(){
    return(
        //maybe overflow-hidden 
        <div className="relative overflow-hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-2xl object-cover cursor-pointer transition-all duration-600 card">
        <FrontPic />
        <YGO />
      </div>
    );
}