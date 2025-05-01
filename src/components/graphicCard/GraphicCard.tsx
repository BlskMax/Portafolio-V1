'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique } from "next/font/google";
import { IGraphicThingProps } from "@/interfaces";
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

function GraphicCard({ graphic }: IGraphicThingProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className={`${bungee.className} flex md:flex-col flex-col items-center uppercase border-b-2 border-dotted pb-[3vh]`}>
        <h1 className="md:text-lg mt-[1vh] border-b-2 border-red-800 mb-[2vh] pb-1">
          {graphic.name}
        </h1>

        <img
          src={graphic.image}
          alt={graphic.name}
          onClick={() => setIsOpen(true)}
          className="md:w-[20vw] md:h-[50vh] w-[36vw] h-[18vh] object-contain mb-[2vh] cursor-pointer transition-transform hover:scale-105 duration-300"
        />

        <h1 className="md:text-xl text-red-800 mt-[1vh] mb-[1vh] border-2 p-2">
          {graphic.type}
        </h1>
      </main>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={graphic.image}
            alt={graphic.name}
            className="max-w-[90vw] max-h-[90vh] object-contain border-4 border-white"
          />
        </div>
      )}
    </>
  );
}

export default GraphicCard;
