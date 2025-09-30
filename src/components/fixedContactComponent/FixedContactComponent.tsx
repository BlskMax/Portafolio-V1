'use client'

import { Bebas_Neue, Bungee, Shippori_Antique } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const  bungee = Bungee({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  shippori = Shippori_Antique({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

export default function FixedContactComponent () {

    const router = useRouter();
    const pathname = usePathname();

    return (
<>
        {pathname === '/' ? (

            <section id="contact" className={`${bebas.className} md:mt-[15vh] mt-[2vh] `}>
          <img
          src="/images/lets.png"
          className="md:w-[50vw] h-auto ml-auto mr-auto md:mb-[6vh] mb-[2vh]"/>

          <article className="flex flex-row  justify-evenly mb-[10vh]">

            <div className="flex flex-col md:w-[8vw] w-[20vw]  p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://github.com/BlskMax"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <FaGithub className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /BlskMax
              </h1> */}
              </a>
            </div>


            <div className="flex flex-col md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <FaLinkedin className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /Max Galarza
              </h1> */}
              </a>
            </div>

            <div className="flex flex-col  md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="mailto:alejandro8g8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <ImMail4 className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /alejandro8g8@gmail.com
              </h1> */}
              </a>
            </div>

            <div className="flex flex-col md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://www.fiverr.com/s/rEk8NZr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <SiFiverr className=" p-2 md:text-9xl text-7xl text-red-800  duration-500 hover:cursor-pointer rounded-full bg-black" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /alejandro8g8@gmail.com
              </h1> */}
              </a>
            </div>

          </article>
        </section>
            
        ): (
                     <section id="contact" className={`${bebas.className} mt-[15vh] `}>
          <img
          src="/images/lets.png"
          className="md:w-[50vw] h-auto ml-auto mr-auto md:mb-[6vh] mb-[2vh]"/>

          <article className="flex flex-row  justify-evenly mb-[10vh]">

            <div className="flex flex-col md:w-[8vw] w-[20vw]  p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://github.com/BlskMax"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <FaGithub className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /BlskMax
              </h1> */}
              </a>
            </div>


            <div className="flex flex-col md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <FaLinkedin className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /Max Galarza
              </h1> */}
              </a>
            </div>

            <div className="flex flex-col  md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="mailto:alejandro8g8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <ImMail4 className="text-black md:text-9xl text-7xl  duration-500 hover:cursor-pointer" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /alejandro8g8@gmail.com
              </h1> */}
              </a>
            </div>

            <div className="flex flex-col md:w-[8vw] w-[20vw] justify-evenly p-2 rounded-lg bg-red-800 hover:bg-white transition-all duration-300">
                <a
                href="https://www.fiverr.com/s/rEk8NZr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl duration-500 hover:scale-105 flex items-center"
              >
              <SiFiverr className=" p-2 md:text-9xl text-7xl text-red-800  duration-500 hover:cursor-pointer rounded-full bg-black" />
              {/* <h1 className="text-black md:text-4xl text-xl">
                /alejandro8g8@gmail.com
              </h1> */}
              </a>
            </div>

          </article>
        </section>
        )}

        </>



    )
}

