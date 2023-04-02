import React from "react";

export default function FrontPic(){
    return(
        <div classname="absolute inset-0 flex justify-center
        items-center bg-gray-900 transition-all duration-100 delay-200 z-20 
        opacity-100 hover:opacity-0">
        <img
            className="object-center rounded"
            alt="hero"
            src="./me.jpg"
            />
        </div>
    );
}