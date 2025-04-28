'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique, Shippori_Antique_B1 } from "next/font/google";
import { IGraphicThingProps, ISoftwareProps } from "@/interfaces";
import { useRouter } from "next/navigation"; 

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

function GraphicCard({ graphic }: IGraphicThingProps) {

    const router = useRouter();


    return (
        <>
            <main className={`${bungee.className} flex md:flex-col flex-col items-center uppercase border-b-2 border-dotted pb-[3vh]`}>
                    <h1 className= "md:text-lg mt-[1vh]  border-b-2 border-red-800 mb-[2vh] pb-1 ">
                            {graphic.name}
                    </h1>
                    <img
                        src={graphic.image}
                        alt={graphic.name}
                        className="md:w-[20vw] md:h-[50vh] w-[36vw] h-[18vh] object-contain mb-[2vh] "
                    />

                    <h1 className= "md:text-xl text-red-800  mt-[1vh] mb-[1vh] border-2 p-2 ">
                            {graphic.type}
                    </h1>


            </main>
        </>
    );
}

export default GraphicCard;
