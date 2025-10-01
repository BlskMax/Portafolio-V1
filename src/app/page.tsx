import BandCard from "@/components/bandCard";
import ComicCard from "@/components/comicCard";
import ContactComponent from "@/components/contactComponent/ContactComponent";
import EliCard from "@/components/eliCard";
import FixedContactComponent from "@/components/fixedContactComponent/FixedContactComponent";
import FlickCard from "@/components/flickCard";
import HomeButtons from "@/components/homeButtons/HomeButtons";
import Card from "@/components/preview/preview";
import PreviewCards from "@/components/previewCards";
import SkillsComponent from "@/components/skillsComponent";
import SkyCard from "@/components/skyCard";
import { Josefin_Sans, Roboto_Condensed } from "next/font/google";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ImMail4 } from "react-icons/im";
import { TbBrandFiverr } from "react-icons/tb";

const josefin = Josefin_Sans({
  subsets:['latin'],
  weight: ['600'],
  variable: '--font-bebas',
});

const robotoCond = Roboto_Condensed({
  subsets:['latin'],
  weight: ['700'],
  variable: '--font-bebas',
});

export default function Home() {
  return (
    <main className="md:mt-0  ">
      <section id="start" className="relative md:w-screen md:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          disablePictureInPicture
          className="absolute top-0 left-0  md:w-screen md:h-screen  object-fill"
        >
          <source src="/video/PORTAFOLIO_VHS_lightr.mp4" type="video/mp4" />
        </video>

        <div className="relative flex flex-col items-center h-full md:pt-16 pt-16 pb-10 px-4 text-center  ">
          {/* <img
            src="/images/max1.png"
            className="w-[90vw] max-h-96 mb-4 md:w-[80vw] h-auto"
          /> */}
          {/* <h2 className="text-white text-base md:text-5xl font-bold">FULL STACK WEB DEVELOPER</h2>
          <h2 className="text-red-700 text-base md:text-4xl font-bold">& FREELANCE GRAPHIC DESIGN</h2> */}

          <div className="flex space-x-4 md:mt-[5vh] mt-[15vh]">
            <a href="https://github.com/BlskMax" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl duration-500 hover:scale-105">
              <FaGithub className="text-white text-xl md:text-7xl hover:text-red-700 duration-500" />
            </a>

            <a href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/"
              className="rounded-2xl duration-500 hover:scale-105" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl md:text-7xl hover:text-red-700 duration-500" />
            </a>

            <a href="https://www.fiverr.com/s/rEk8NZr"
              className="rounded-2xl duration-500 hover:scale-105" target="_blank" rel="noopener noreferrer">
              <TbBrandFiverr className="text-white text-xl md:text-7xl hover:text-red-700 duration-500" />
            </a>

            <a href="https://www.instagram.com/blsk_max/"
              className="rounded-2xl duration-500 hover:scale-105" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl md:text-7xl hover:text-red-700 duration-500" />
            </a>
          </div>
        </div>
      </section>

     <section id="about" className="absolute md:h-[60vh] h-[30vh] flex w-screen items-center justify-center text-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    preload="auto"
    disablePictureInPicture
    className="absolute top-0 left-0 md:w-full md:h-full w-screen h-[50vh] object-cover object-top"
  >
    <source src="/video/PORTAFOLIO_VHS_2_lightr.mp4" type="video/mp4" />
  </video>

  <div className={`${robotoCond.className} md:w-[60vw] w-[80vw] `}>
  <h1 className="relative md:z-10 text-red-600 md:text-2xl font-bold md:px-4 text-[1.6vh] ">
  I'm Max, a video editor and graphic designer from México. I'm madly in love with art and fortunately in the last few years i've been able to colaborate in many projects through video production, coding, graphic assets, general planning, direction and many more. I'm always looking forward to join new and exciting projects, so feel free to check my work and drop a message through any of the listed profiles. Let me know how can I be of help to make your projects feel great ;)
  </h1>
  </div>
</section>


      <section>
        <HomeButtons />
      </section>

      <section>
        <FixedContactComponent />
      </section>
    </main>
  );
}
