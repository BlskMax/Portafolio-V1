'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique, Shippori_Antique_B1 } from "next/font/google";
import { ISoftwareProps } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation"; 

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

export default function HomeButtons() { 

    const router = useRouter();
    const pathname = usePathname();


    return (
        <>
        <main className="md:mt-[65vh] mt-[33vh]  " >
            <div className=" flex md:justify-evenly flex-row  justify-evenly   ">

                <button type="button" onClick={() => router.push('/video')}
                className={`${bebas.variable} font-sans md:text-7xl text-lg  font-bold text-black 
                bg-white md:p-4 md:w-[60vh] w-[24vw] md:mb-0 mb-[2vh] md:h-auto h-[5vh]
                hover:scale-105 hover:bg-red-800 duration-300 md:rounded-none rounded-lg 
                hover:text-white`}>
                VIDEO</button>

                <button type="button" onClick={() => router.push('/graphicDesign')}
                className={`${bebas.variable} font-sans md:text-7xl text-lg font-bold text-black 
                bg-white md:p-4 md:w-[60vh] w-[24vw] md:mb-0 mb-[2vh] md:h-auto h-[5vh]
                hover:scale-105 hover:bg-red-800 duration-300 md:rounded-none rounded-lg
                hover:text-white`}>
                GRAPHIC DESIGN</button>

                <button type="button" onClick={() => router.push('/softwareDev')}
                className={`${bebas.variable} font-sans md:text-7xl text-lg  font-bold text-black 
                bg-white md:p-4 md:w-[60vh] w-[24vw] md:h-auto h-[5vh] 
                hover:scale-105 hover:bg-red-800 duration-300 md:rounded-none rounded-lg
                hover:text-white  `}>
                WEB DEV</button>

            </div>

        </main>

        </>
    );
}

