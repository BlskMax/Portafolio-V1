'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique, Shippori_Antique_B1 } from "next/font/google";
import { ISoftwareProps } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation"; 
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

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

export default function VideoIntroComponent() { 

    const router = useRouter();
    const pathname = usePathname();


    return (
    
        <section className=" w-[90vw] flex md:flex-row-reverse flex-col-reverse ml-auto mr-auto justify-between">

        <div className="flex flex-row space-x-[1vw] ml-auto mr-auto md:ml-0 md:mr-0">  
          <img src="/images/works/subGif.gif"
          className="md:w-[16vw] w-[25vw] h-auto " />
          <img src="/images/works/pinkGif.gif"
          className="md:w-[28vw] w-[47vw] h-auto " />

        </div>

      <div className={`${bebas.variable} font-sans md:w-[40vw] w-[90vw] flex flex-col text-center md:mt-0 `}>
        <h1 className="text-4xl border-2 border-red-800 md:p-4 p-2 md:mb-[4vh] mb-[2vh]
        md:text-6xl ">
        Editing/Video Production
        </h1>
        <div>
          <h1 className={`${shippori.variable} md:text-4xl text-xl md:leading-[6vh] leading-[3vh] underline decoration-red-900 md:mb-0 mb-[2vh]  `}>
            From simple stuff like doing subtitles all the way to music video production.
            Either you want just a simple editing job, need someone to be part of a 
            bigger team or to start a project from zero, just give me a
            heads up and let's make it look amazing!
          </h1>  
          {/* <h1 className={`${shippori.variable} text-4xl leading-[8vh] underline decoration-red-800  `}>
            Desde subtitulado para reels hasta videos musicales.
            Si necesitas un trabajo pequeño de edición, incluirme en
            un equipo o llevar a cabo todo un proyecto pongamonos en
            contacto y
            lleguemos a un acuerdo!
          </h1>   */}
        </div>
      </div>


      </section>

    );
}

