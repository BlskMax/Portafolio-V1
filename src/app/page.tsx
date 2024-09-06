import ComicCard from "@/components/comicCard";
import EliCard from "@/components/eliCard";
import FlickCard from "@/components/flickCard";
import Card from "@/components/preview/preview";
import PreviewCards from "@/components/previewCards";
import SkyCard from "@/components/skyCard";
import { Josefin_Sans } from "next/font/google";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { ImMail4 } from "react-icons/im";

const josefin = Josefin_Sans({
  subsets:['latin'],
  weight: ['600'],
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
          className="absolute top-0 left-0 w-[160vw] h-[140vh] md:w-screen md:h-screen  object-cover"
        >
          <source src="/video/statik.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full md:pt-32 pt-16 pb-10 px-4 text-center">
          <img
            src="/images/max1.png"
            className="w-[90vw] max-h-96 mb-4 md:w-[80vw] h-auto"
          />
          <h2 className="text-white text-base md:text-5xl font-bold">FULL STACK WEB DEVELOPER</h2>
          <h2 className="text-red-700 text-base md:text-4xl font-bold">FRONT-END ESPECIALIZED</h2>

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

      <section id="about" className="flex flex-col w-screen text-center">
        <img
          src="/images/aboutMax.jpg"
          className="w-screen h-auto mb-4 rounded-md"
        />
      </section>

      <section id="projects" className="flex flex-col mt-10">
        <img
          src="/images/projectsPng.png"
          className="w-[60vw] sm:w-[40vw] md:w-[25vw] max-h-96 h-auto mb-10 rounded-md mx-auto"
        />

        <section className="pb-10">
          <Card />
        </section>

        <div className="flex flex-col md:space-y-10 space-y-[55vh] ">

          <div id="comicCard md:ml-[2vw] ">
            <ComicCard />
          </div>

          <div id="skyCard" className="flex md:self-end md:mr-[2vw]">
            <SkyCard />
          </div>

          <div id="eliCard md:ml-[2vw]">
            <EliCard />
          </div>

          <div id="flickCard" className="flex md:self-end md:mr-[2vw] ">
            <FlickCard />
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col md:mt-16 mt-[46vh] p-4 border-t-2 border-white border-opacity-40 ">
        <img
          src="/images/lets.png"
          className="md:w-[50vw] h-auto mb-4 rounded-md mx-auto md:mt-[4vh] mt-[4vh] "
        />

        <article className="flex flex-col md:flex-row sm:justify-evenly mt-4 space-y-8 sm:space-y-0 w-[80vw] ml-auto mr-auto ">
          <div className="flex flex-col md:items-left space-y-4">
            <div className="flex items-center">
              <a
                href="https://github.com/BlskMax"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
                <FaGithub className="text-white md:text-7xl text-5xl hover:text-red-700 duration-500 mr-2" />
                <h1 className="md:text-2xl">/BlskMax</h1>
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white md:text-7xl text-5xl hover:text-red-700 duration-500 mr-2" />
                <h1 className="md:text-2xl">/alejandro-maximiliano-galarza-ornelas</h1>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-left space-y-4">
            <div className="flex items-center">
              <a
                href="mailto:alejandro8g8@gmail.com"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImMail4 className="text-white md:text-7xl text-5xl hover:text-red-700 duration-500 mr-2" />
                <h1 className="md:text-2xl">alejandro8g8@gmail.com</h1>
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://wa.me/525570680017"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white md:text-7xl text-5xl hover:text-red-700 duration-500 mr-2" />
                <h1 className="md:text-2xl">+52 55-7068-0017</h1>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
