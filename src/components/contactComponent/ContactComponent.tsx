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

export default function ContactComponent() { 

    const router = useRouter();
    const pathname = usePathname();


    return (
        <>
 <section id="contact" className={`${shippori.className} uppercase flex flex-col md:mt-16 mt-[46vh] p-4 border-t-2 border-white border-opacity-40 `}>
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

        </>
    );
}

