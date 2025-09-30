'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique } from "next/font/google";
import { IGraphicThingProps, IVideoThingProps } from "@/interfaces";
import { useState } from "react";

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

const shippori = Shippori_Antique({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

function VideoCard({ video }: IVideoThingProps) {

  return (
    <>
      <main className={`${bungee.className} flex md:flex-col flex-row items-center justify-evenly uppercase md:border-b-2 md:border-dotted pb-[3vh] text-center`}>

        <a href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
            src={video.image}
            alt={video.name}
            className="md:w-[30vw] md:h-[50vh] w-[20vh] h-auto md:object-contain object-cover cursor-pointer transition-transform hover:scale-105 duration-300"
          />
        </a>

        <section className="flex flex-col md:ml-0 ml-[4vw]">
        
        <h1 className="md:text-2xl text-base md:h-auto md:mt-[1vh] md:border-b-2 border-red-800  md:mb-[0vh] md:pb-1 ">
          {video.name}
        </h1>

        <h1 className="md:text-2xl md:h-auto text-sm text-red-800 md:mt-[1vh] md:mb-[1vh] md:border-2 border-0 p-2 m-0">
          {video.type}
        </h1>

        <a href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <button className=" p-2 md:text-2xl text-sm md:mt-[2vh] m-0 border-b-2 border-red-800 md:mb-[2vh] pb-1 hover:text-red-700 hover:border-white hover:border-2 duration-500 rounded-md  ">
          Visit
        </button>
        </a>
        </section>

      </main>


    </>
  );
}

export default VideoCard;
