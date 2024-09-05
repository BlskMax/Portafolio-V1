'use client'
import React from 'react';
import { Bebas_Neue, Josefin_Sans } from 'next/font/google';
import { FaCode } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-bebas',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export default function SkyCard() {
  const carImages = [
    "/images/reactPng.png",
    "/images/tailwind.png",
    "/images/node.png",
    "/images/tsPNG.png",
    "/images/postgrePng.png",
    "/images/nextPNG.png",
    "/images/corelPNG.png",
    "/images/vercelPng.png",
  ];

  const repeatedImages = Array(300).fill(carImages).flat();

  return (
    <main className="w-full md:w-[68vw] h-[84vh] shadow-[0_0_10px_2px_rgba(153,27,27,0.5)] backdrop-blur-lg backdrop-saturate-180 bg-[rgba(10,11,24,0.58)] rounded-xl ml-auto mr-auto p-4 md:ml-[2vw]">
      <section className="flex flex-col md:flex-row justify-evenly pt-[8vh] md:pt-[4vh]">
        <img
          src="/images/smPr.jpg"
          className="w-full md:w-[40vw] max-h-96 h-auto rounded-xl border-2 border-white border-opacity-20 mb-6 md:mb-0 "
        />

        <div className="flex flex-col text-center mt-auto mb-auto w-full md:w-[20vw]">
        <h1 className={`${bebas.variable} font-sans text-red-800 text-4xl md:text-7xl font-bold uppercase`}>
            SKY MARKET
          </h1>
          <p className="underline decoration-slate-700 text-left mt-4 md:mt-0 md:text-lg">
            SM was my very first E-Commerce and visually the project i'm more proud of.
            It's a fairly common project where you can create accounts, add products to a cart and make a simulated checkout.
            Given there weren't any obvious design line to follow I deicded to make a more experimental branding, giving
            Sky Market an out of the roof personality.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full md:w-[60vw] pt-[4vh] justify-evenly text-center mt-6 md:mt-0">
        <div>
          <h1 className={`${josefin.variable} font-sans text-white text-3xl md:text-4xl font-bold uppercase`}>
            Prominent Technologies
          </h1>
          <div className="relative w-full max-w-full md:max-w-sm mx-auto overflow-hidden rounded-2xl border-2 border-slate-700 min-w-[4vw] min-h-[8vh] mt-4">
            <div className="flex w-[7000000%] animate-scroll">
              {repeatedImages.map((src, index) => (
                <div key={index} className="flex-none">
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="max-w-[12vw] md:max-w-[4vw] h-[10vh] ml-[2vw] object-contain object-center rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <article className="flex flex-row self-center space-x-10 mt-6 md:mt-0">
          <div>
            <a
              href="https://github.com/BlskMax/Sky-Market"
              className="rounded-2xl duration-500 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="text-white text-4xl md:text-5xl hover:text-red-800 duration-500 hover:scale-125" />
            </a>
            <h1 className="text-white">CODE</h1>
          </div>
          {/* <div>
            <a
              href="https://comiccraft.vercel.app/"
              className="rounded-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdEye className="text-white text-4xl md:text-5xl hover:text-red-800 duration-500 hover:scale-125" />
            </a>
            <h1 className="text-white">VISIT</h1>
          </div> */}
        </article>
      </section>
    </main>
  );
}
