'use client'
import React from 'react';
import { Bebas_Neue, Josefin_Sans } from 'next/font/google';
import { FaCode } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import Design from './design';

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

export default function SkillsComponent() {



  return (
    <main className="mt-[5vh] w-full md:w-full h-full backdrop-blur-lg backdrop-saturate-180 bg-[rgba(10,11,24,0.58)] rounded-xl">
          <img
          src="/images/skills.png"
          className="w-[25vw] max-h-96 h-auto ml-auto mr-auto pt-[3vh]"
        />

        <Design />
    </main>
  );
}
