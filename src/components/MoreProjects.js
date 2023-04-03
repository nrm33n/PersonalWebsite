import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import CarouselComponent from "./metacomponents/Carousel.js";

export default function MoreProjects(){

    return(
    <section id="projects" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Additional Projects 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a couple of ongoing projects I'm really excited about!
          </p>
        </div>

        <CarouselComponent />

    </div>
    </section>
    );
}