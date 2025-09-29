import BandCard from "@/components/bandCard";
import ComicCard from "@/components/comicCard";
import ContactComponent from "@/components/contactComponent/ContactComponent";
import EliCard from "@/components/eliCard";
import FlickCard from "@/components/flickCard";
import HomeButtons from "@/components/homeButtons/HomeButtons";
import Card from "@/components/preview/preview";
import PreviewCards from "@/components/previewCards";
import SkillsComponent from "@/components/skillsComponent";
import SkyCard from "@/components/skyCard";
import { Josefin_Sans, Roboto_Condensed } from "next/font/google";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { ImMail4 } from "react-icons/im";

const josefin = Josefin_Sans({
  subsets:['latin'],
  weight: ['600'],
  variable: '--font-bebas',
});

const robotoCond = Roboto_Condensed({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export default function Home() {
  return (
    <main className="">
      <section id="start" className="relative md:w-screen md:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          disablePictureInPicture
          className="absolute top-0 left-0  md:w-screen md:h-screen  object-cover"
        >
          <source src="/video/PORTAFOLIO_VHS_lightr.mp4" type="video/mp4" />
        </video>

        <div className="relative flex flex-col items-center h-full md:pt-16 pt-16 pb-10 px-4 text-center">
          {/* <img
            src="/images/max1.png"
            className="w-[90vw] max-h-96 mb-4 md:w-[80vw] h-auto"
          /> */}
          {/* <h2 className="text-white text-base md:text-5xl font-bold">FULL STACK WEB DEVELOPER</h2>
          <h2 className="text-red-700 text-base md:text-4xl font-bold">& FREELANCE GRAPHIC DESIGN</h2> */}

          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/BlskMax" target="_blank" rel="noopener noreferrer"
              className="rounded-2xl duration-500 hover:scale-105">
              <FaGithub className="text-white text-4xl md:text-7xl hover:text-red-700 duration-500" />
            </a>

            <a href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/"
              className="rounded-2xl duration-500 hover:scale-105" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-4xl md:text-7xl hover:text-red-700 duration-500" />
            </a>
          </div>
        </div>
      </section>

     <section id="about" className="relative flex w-screen h-[60vh] items-center justify-center text-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    preload="auto"
    disablePictureInPicture
    className="absolute top-0 left-0 w-full h-full object-cover object-top"
  >
    <source src="/video/PORTAFOLIO_VHS_2_lightr.mp4" type="video/mp4" />
  </video>

  <div className={`${robotoCond.className} w-[60vw]`}>
  <h1 className="relative z-10 text-red-600 text-4xl font-bold px-4 ">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquid sed,
    fuga labore recusandae enim odio assumenda dignissimos provident reiciendis
    autem nesciunt. Commodi repellat magnam nemo fugiat repellendus facere molestias!
  </h1>
  </div>
</section>


      <section>
        <HomeButtons />
      </section>

      <section>
        <ContactComponent />
      </section>
    </main>
  );
}
