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
        <main className="mt-[5vh] mb-[5vh]" >
            <div className=" flex justify-evenly ">
                <button type="button" onClick={() => router.push('/softwareDev')}
                className={`${bebas.variable} font-sans text-7xl font-bold text-black 
                bg-white p-4 w-[60vh]
                hover:scale-105 hover:bg-red-800 duration-300 `}>
                SOFTWARE</button>

                <button type="button" onClick={() => router.push('/graphicDesign')}
                className={`${bebas.variable} font-sans text-7xl font-bold text-black 
                bg-white p-4 w-[60vh]
                hover:scale-105 hover:bg-red-800 duration-300 `}>
                GRAPHIC DESIGN</button>

            </div>

        </main>

        </>
    );
}

