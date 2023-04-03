import React from "react";
import { extraprojects } from "../../data.js";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GitHubIcon from '@material-ui/icons/GitHub';
import OutboxIcon from '@material-ui/icons/ExitToApp';
import LeftIcon from "@material-ui/icons/ArrowBackIosRounded";
import RightIcon from "@material-ui/icons/ArrowForwardIosRounded";
import LineIcon from "@material-ui/icons/MaximizeRounded";

export default function CarouselComponent(){

    return (

        <div>
        {/*carousel section start max-w-5xl*/}
        <Carousel 
        dynamicHeight={false} infiniteLoop="true" showThumbs={false}
        showStatus={false} labels={false} axis="horizontal"

        /* custom arrows */
        renderArrowPrev={(onClickHandler, hasPrev) => {
            return (
              <div
              type="button"
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-start items-center p-5 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={onClickHandler}
              >
                <LeftIcon className="w-9 h-9 text-white" />
              </div>
            );
          }}

          renderArrowNext={(onClickHandler, hasNext) => {
            return (
                <div
                type="button"
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-end items-center p-5 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={onClickHandler}
              >
                <RightIcon className="w-9 h-9 text-white" />
              </div>
            );
          }}
          /* custom arrows end */

          /* custom indicator! */
          renderIndicator={(onClickHandler, isSelected, index) => {
            const defStyle = { marginLeft: 10, color: "white" };
            const style = isSelected
              ? { ...defStyle, color: "green" }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
              >
                <LineIcon className="justify-end bottom-0 top-0 flex"/>
              </span>
            );
          }}
          /* custom indicator end */
        >
            {/* ------------carousel start--------------  */}
            <div className="carousel-slide drop-shadow-2xl shadow-black rounded-3xl">
            {/*item 1 wrapper*/}
                <div class="max-w-5xl relative z-0 opacity-100">
                    <img class=" carousel-inner object-cover object-center opacity-50 rounded-3xl" src="./coding.svg" />
                    {/* caption wrapper */}
                    <div className="absolute inset-0 flex justify-end justify-items-center z-10 opacity-100 flex-col space-y-4 p-8">
                        <h3 class="text-5xl text-white">Bastaki</h3>
                        <p class="text-xl">A dictionary for a dying language. UN-backed! </p>
                        <p class="text-green-500">Flask, SQLite, TailwindCSS, Flowbite</p>
                        {/*icons */}
                        <div class="inline-block grid-rows-2">
                        <a href="" className="inline-block pr-4"><GitHubIcon/></a> 
                        <a href="" class="inline-block pl-4"><OutboxIcon/></a>
                        </div>
                    </div>
                    {/* caption end */}
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
    );
}