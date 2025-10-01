import Image from "next/image";
import { Bebas_Neue, Shippori_Antique } from "next/font/google";
import SoftwareCard from "../softwareCard/SoftwareCard";
import { ISoftware, ISoftwareListProps } from "@/interfaces";

const  shippori = Shippori_Antique({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  bebas = Bebas_Neue ({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function SoftwareList ({softwares}: ISoftwareListProps) {
    return (
        <>
        
        <main className=" w-screen mt-[10vh] flex flex-row justify-evenly flex-wrap mb-[10vh] "> 

        <div className={bebas.className}>
                    <h1
                    className=" md:text-8xl text-5xl border-2 border-red-800 p-4 md:mb-[8vh] mb-[4vh] "
                    >WEB DEVELOPMENT</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-[5vw]   md:gap-y-[2vh] ">
        {softwares.map ((software: ISoftware) => (
        <SoftwareCard software={software} key={software.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default SoftwareList;