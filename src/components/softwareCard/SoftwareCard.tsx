'use client';
import Image from "next/image";
import { Bebas_Neue, Bungee, Shippori_Antique, Shippori_Antique_B1 } from "next/font/google";
import { ISoftwareProps } from "@/interfaces";
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

function SoftwareCard({ software }: ISoftwareProps) {

    const router = useRouter();

    const handleProjectClick = () => {
        
        if (software.id) {
            router.push(`/softwareDev/projects/${software.id}`);
        }
    }

    return (
        <>
            <main className="flex md:flex-col flex-col items-start">
                <div className="relative bg-black ">
                    
                    <img
                        src={software.image}
                        alt={software.name}
                        className="md:w-[28vw] md:h-[35vh] w-[36vw] h-[18vh] object-cover duration-300 hover:opacity-70 rounded-lg "
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                        <button
                            onClick={handleProjectClick}
                            className="font-bold md:text-4xl hover:scale-110 duration-500"
                        >
                            <img
                            src={software.logo}
                            alt="DETALLES"
                            className="md:w-[20vw] w-[24vw] opacity-100 duration-300"
                            />
                        </button>
                    </div>
                </div>

                

                <section className={bungee.className}>
                <div className="flex flex-row justify-between uppercase border-b-2 border-dotted
                md:w-[28vw] p-2 ">
                    <h1 className= "md:text-lg mt-[1vh] mb-[1vh]">
                            {software.name}
                    </h1>
                    <h1 className= "md:text-lg text-red-800  mt-[1vh] mb-[1vh]">
                            {software.time}
                    </h1>
                </div>
                </section>

            </main>
        </>
    );
}

export default SoftwareCard;
