import React from "react";
import Typewriter from 'typewriter-effect';
import IconButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font sm:text-4xl text-4xl mb-4 font-large text-white">
            <Typewriter
              options={{
                strings: ['Hey.. Narmeen here.', 'Welcome'],
                autoStart: true,
                loop: true,
              }}
            />
            <br className="hidden lg:inline-block" />
          </div>
          <p className="mb-8 leading-relaxed">
            I'm a computer person with a lot of interests. Big fan of data science. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.jpg"
          />
        </div>
      </div>
    </section>
  );
}
