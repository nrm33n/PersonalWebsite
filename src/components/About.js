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
          <p className="mb-8 leading-relaxed text-lg">
            <p>
            I'm a computer person with a lot of interests. Big fan of data science, MLAI, and human-computer interaction.
            </p> 
            Outside of work, I'm an internationally exhibited artist and classically trained pianist. 
            I like modding (+ playing) video games and spend a lot of Yu-Gi-Oh!
          </p>
          <div className="flex justify-around">
            <a
              href="mailto: nrmn@pm.me"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                
              {/* envelope heroku icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

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
