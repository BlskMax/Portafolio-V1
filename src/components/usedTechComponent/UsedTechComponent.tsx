'use client';
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

export default function UsedTechComponent({ images }: {images: string[] }) {
  const carImages = images.length > 0 ? images : [

      "/images/nextPNG.png",
      "/images/tailwind.png",
      "/images/node.png",
      "/images/tsPNG.png",
      "/images/gooCloud.png",
      "/images/cloudinary.png",
      "/images/illustraPng.png",
      "/images/nestPng.jpg",

  ];
  

  const repeatedImages = Array(300).fill(carImages).flat();

  return (
         <div>
           <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl border-2 border-white mt-4 p-4">
             <div className="flex w-[7000000%] animate-scroll">
               {repeatedImages.concat(carImages).map((src, index) => (
                 <div key={index} className="flex-none">
                   <img src={src} alt={`Image ${index + 1}`} className="max-w-[12vw] md:max-w-[4vw] h-[10vh] ml-[2vw] object-contain object-center rounded-2xl" />
                 </div>
               ))}
             </div>
           </div>
         </div>
  )
}