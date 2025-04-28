import Image from "next/image";
import { Bebas_Neue, Shippori_Antique } from "next/font/google";
import SoftwareCard from "../softwareCard/SoftwareCard";
import { IGraphicThing, IGraphicThingListProps, ISoftware, ISoftwareListProps } from "@/interfaces";
import GraphicCard from "../graphicCard/GraphicCard";

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

function GraphicList ({graphics}: IGraphicThingListProps) {
    return (
        <>
        
        <main className=" w-screen mt-[10vh] flex flex-row justify-evenly flex-wrap mb-[10vh] "> 

        <div className={bebas.className}>
                    <h1
                    className=" text-8xl border-2 border-red-800 p-4 mb-[8vh] "
                    >GRAPHIC DESIGN WORKS</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-[5vw] md:gap-y-[2vw] gap-x-[4vw] gap-y-[2vh] pl-[2vw] pr-[2vw]  ">
        {graphics.map ((graphic: IGraphicThing) => (
        <GraphicCard graphic={graphic} key={graphic.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default GraphicList;