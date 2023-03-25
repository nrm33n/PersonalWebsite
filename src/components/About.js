import React from "react";
import Typewriter from 'typewriter-effect';
import IconButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Flippy from "./metacomponents/Flippy.js"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font sm:text-4xl text-4xl mb-4 font-large text-white">
            <Typewriter
              options={{
                strings: ['Hey.. Narmeen here'],
                autoStart: true,
                loop: true,
              }}
            />
            <br className="hidden lg:inline-block" />
          </div>
          <p className="mb-8 leading-relaxed">
            I'm a computer person with lots of interests. Big fan of data science. 
            Outside of work, I'm an internationally exhibited artist and classically trained pianist. 
            I like modding video games and play a lot of Yu-Gi-Oh!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact
            </a>
          </div>
        </div>
        <div className="">
          <Flippy />
        </div>
      </div>
    </section>
  );
}
