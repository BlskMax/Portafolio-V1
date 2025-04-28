'use client'
import React, { useState } from 'react';
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

export default function Design() {

    const [selectedImage, setSelectedImage] = useState<string | null> (null) ;

    const images: string[] = [
        "images/album/dsFinal2.jpg",
        "images/album/r4.jpg",
        "images/album/bmanart.jpg",
        "images/album/hmart.jpg",
        "images/album/MAUSAN.jpg",
        "images/album/tloumap.jpg",
        "images/album/th1.jpg",
        "images/album/re3.jpg",
        "images/album/sh3pos.jpg",
        "images/album/gta4.jpg",
        "images/album/falau.jpg",
        "images/album/OBF2.jpg",
        "images/album/smpost.jpg",
        "images/album/enoughart.jpg",
        "images/album/DJF1.jpg",
        "images/album/cosmoPoster.png",
        "images/album/elysiumCyb.png",
        "images/album/bbart.jpg",
        "images/album/meticonPr1.png",
        "images/album/PV2.jpg",
        "images/album/sonicv3.jpg",
        "images/album/openart.jpg",
        "images/album/turtleart.jpg",
        "images/album/flashart.jpg",
        "images/album/infinityart.jpg",
        "images/album/ccPr.jpg",
        "images/album/bluemet.png",
        "images/album/MAKOTAKO.png",

    ]

  return (
    <main className="mt-[5vh] w-full md:w-full h-[84vh] backdrop-blur-lg backdrop-saturate-180 bg-[rgba(10,11,24,0.58)] rounded-xl">
        <div>
          <img
          src="/images/graph.png"
          className="w-[40vw] max-h-96 h-auto ml-[2vw] pt-[10vh]"
        />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
        {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto cursor-pointer hover:scale-150 transition-transform duration-300"
            onClick={() => setSelectedImage(image)}
            />
        ))}
        </div>

        {selectedImage && (
            <div
            className="fixed inset-0 flex items-center justify-center bg_black bg-opacity-75 z-50"
            onClick={() => setSelectedImage(null)}>
            
            <img 
            src={selectedImage}
            alt="Selected"
            className='max-w-full max-h-full'
            />
            
            </div>
        )}
        
    </main>
  );
}
