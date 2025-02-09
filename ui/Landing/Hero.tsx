"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, spring } from "framer-motion";

export const Hero = () => {
  const containerRef = useRef(null)
  const title = "DICE GAME"
  
  return (
    <div className="flex md:items-end items-center flex-col w-full gap-5 justify-center" 
    >
      <motion.h2 
      className="text-6xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold whitespace-nowrap"
      ref={containerRef}
      drag
      dragConstraints={containerRef}
      >
        {title.split("").map((char, index)=>{
          return <motion.span key={index} 
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition:{
                duration: 0.1,
                delay: (index*0.1)+0.1
              }
            }}
          >
            {char}
          </motion.span>
        })}

      </motion.h2>

      <motion.button
        className="font-bold rounded-md md:ml-auto w-44 bg-black text-white"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          y: 5,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1
          }
        }}
      >
        <Link
          href="/game"
          className="w-full h-full px-4 py-3 rounded-md flex justify-center items-center "
        >
          Play
        </Link>
      </motion.button>

      <motion.button className="font-bold rounded-md md:ml-auto w-44 bg-white border-2 border-black"
      initial={{
        y: 5,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity:1,
        transition: {
          delay: 1.2
        }
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#ccc"
      }}
      whileTap={{
        scale: 0.9,
      }}
      >
        <a
          href="https://github.com/sizan14789/Dice-Game.git"
          className="w-full h-full  flex py-3 justify-center items-center"
        >
          Source Code
        </a>
      </motion.button>
    </div>
  );
};
