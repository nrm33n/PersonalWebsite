import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import CarouselComponent from "./metacomponents/Carousel.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GitHubIcon from '@material-ui/icons/GitHub';
import OutboxIcon from '@material-ui/icons/ExitToApp';
import LeftIcon from "@material-ui/icons/ArrowBackIosRounded";
import RightIcon from "@material-ui/icons/ArrowForwardIosRounded";



export default function Projects2(){

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

        {/*carousel section start max-w-5xl*/}
        <Carousel
        dynamicHeight={false} infiniteLoop="true" showThumbs={false} showIndicators={false} 
        showStatus={false} labels={false}
        /* custom arrows */
        /*renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } inset-0 top-0 bottom-0 left-0 flex justify-start items-center p-5 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <LeftIcon className="w-9 h-9 text-white" />
              </div>
            );
          }}*/

          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } inset-0 top-0 bottom-0 right-0 flex justify-end items-center p-5 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <RightIcon className="w-9 h-9 text-white" />
              </div>
            );
          }}
          /* custom arrows end */
        >

            {/*item 1 wrapper*/}
                <div class="h-full carousel-slide max-w-5xl rounded-3xl relative z-0">
                    <img class="object-cover object-center carousel-inner opacity-50" src="./coding.svg" />
                    <div className="absolute inset-0 flex justify-end justify-items-center z-10 opacity-100 flex-col space-y-4 p-5">
                        <h3 class="text-5xl text-white">Bastaki</h3>
                        <p class="text-xl">A dictionary for a dying language. UN-backed! </p>
                        <p class="text-green-500">Flask, SQLite, TailwindCSS, Flowbite</p>
                        {/*icons wrapper */}
                        <div class="inline-block grid-rows-2">
                        <p class="inline-block pr-4"><GitHubIcon/></p> 
                        <p class="inline-block pl-4"><OutboxIcon/></p>
                        </div>
                    </div>
                </div>
            {/* item 2 wrapper */}
                <div class="featured_item">
                    <img class="featured_image object-cover object-center carousel-inner opacity-50" src="./me.jpg" />
                </div>
            {/* item 3 wrapper */}
                <div>
                    <img class="object-cover object-center carousel-inner opacity-50" src="./coding.svg" />
                </div>
        </Carousel>
        {/*carousel end  */}

    </div>
    </section>
    );
}