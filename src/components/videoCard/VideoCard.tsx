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
      <main className={`${bungee.className} flex md:flex-col flex-col items-center uppercase border-b-2 border-dotted pb-[3vh]`}>
        <h1 className="md:text-2xl mt-[1vh] border-b-2 border-red-800 mb-[0vh] pb-1">
          {video.name}
        </h1>

        <a href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        >
          <img
            src={video.image}
            alt={video.name}
            className="md:w-[30vw] md:h-[50vh] w-[36vw] h-[18vh] object-contain cursor-pointer transition-transform hover:scale-105 duration-300"
          />
        </a>

        <h1 className="md:text-2xl text-red-800 mt-[1vh] mb-[1vh] border-2 p-2">
          {video.type}
        </h1>

        <a href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <button className="md:text-2xl mt-[2vh] border-b-2 border-red-800 mb-[2vh] pb-1">
          Visitar
        </button>
        </a>

      </main>


    </>
  );
}

export default VideoCard;
