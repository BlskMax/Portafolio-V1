'use client'
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { allSoftwareList } from "@/data/data";
import { ISoftware } from "@/interfaces";
import { Allura, Bebas_Neue, Bungee, Shippori_Antique } from "next/font/google";
import { FaArrowAltCircleLeft, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import UsedTechComponent from "@/components/usedTechComponent/UsedTechComponent";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const shippori = Shippori_Antique({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  bungee = Bungee({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});




const ProjectDetailPage = () => {
    const params = useParams(); 
    const id = params["project-detail"]
    const [project, setProject] = useState <ISoftware | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState <number | null>(null);
    const extraImages = [project?.extra1, project?.extra2, project?.extra3, project?.extra4,]


    
    useEffect(() => {
        if (id) {
            const projectDetail = allSoftwareList.find((project) => project.id === Number(id));
            
            if (projectDetail) {
                setProject( projectDetail);
            } else {
                console.error("project not found");
            }
        }
    }, [id]);

    const techImages = project ? [
      project.tech1,
      project.tech2,
      project.tech3,
      project.tech4,
      project.tech5,
      project.tech6,
      project.tech7,
      project.tech8,
    ].filter(Boolean) : [];

    const router = useRouter();
    const pathname = usePathname();

    
    return (
        <main className="">

{activeImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✖
          </button>
      
          <img
            src={extraImages[activeImageIndex] ?? ""}
            className="max-w-[90vw] max-h-[80vh] rounded-lg"
          />
      
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center w-full px-4 transform -translate-y-1/2">

            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev! > 0 ? prev! - 1 : extraImages.length - 1
                )
              }
              className="text-white text-6xl"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev! < extraImages.length - 1 ? prev! + 1 : 0
                )
              }
              className="text-white text-6xl"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      )}
            <section className="w-screen h-auto">
                
                {project ? (
                <main className="flex md:flex-col flex-col md:mt-[10vh] mt-[12vh]">

                    <button type="button" onClick={() => router.push('/softwareDev')}>    
                        <FaArrowAltCircleLeft className="md:text-4xl md:ml-[2vw] md:mb-[4vh] mb-[4vh] hover:text-red-600 duration-300 sticky
                        text-2xl"/>
                    </button>

                    <article className="flex flex-row justify-between uppercase md:w-auto w-[100vw] md:mr-0 mr-[2vw] ">

                        <section className={`${bebas.className} md:ml-[10vw] ml-[2vw] flex flex-col`}>
                            <img src={project.altImage} 
                            className="md:w-[22vw] md:h-[60vh] w-[60vw] h-[30vh] object-cover rounded-lg "/>
                            
                            <div className="flex flex-row md:justify-between justify-evenly mt-[4vh] ">
                            <a
                                 href={project.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                            >
                            <button className="flex md:flex-row flex-col md:text-start text-center md:w-[10vw] w-[10vw] md:rounded-none rounded-md bg-red-700 md:items-baseline items-center justify-evenly text-black hover:text-white duration-300  ">
                                <FaGithub className="text-4xl " />
                                <h1 className="md:text-5xl text-base ">
                                    CODE
                                </h1>
                            </button>
                            </a>

                            {project.deployAvailable && (
                                                            <a
                                                                href={project.deployLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                           >
                                                           <button className="flex md:flex-row flex-col md:text-start text-center md:w-[10vw] w-[10vw] md:rounded-none rounded-md bg-red-700 md:items-baseline items-center justify-evenly text-black hover:text-white duration-300  ">
                                                               <TbWorld className="text-4xl " />
                                                               <h1 className="md:text-5xl text-base ">
                                                                   WEB
                                                               </h1>
                                                           </button>
                                                           </a>
                            ) }


                            </div>

                        </section>

                        <section className="md:content-center md:w-[50vw] w-[80vw]  md:mr-[10vw] mr-[1vw] md:ml-0 ml-[4vw]">
                            <img src={project.logo} 
                            className="w-[35vw] ml-auto mr-auto border-b-2 border-dotted pb-[1vh] hover:scale-105 hover:-rotate-2 duration-300"/>
                            <div className={shippori.className}>
                                <h1 className="uppercase md:text-2xl text-[1.3vh] w-[50vw]  md:mt-[4vh] mt-[2vh] border-b-2 border-dotted pb-[2vh]">{project.description}</h1>
                            </div>

                            <div className={`${bungee.className} flex md:flex-row flex-col justify-between`} >
                                <div className="flex flex-row">
                                <h1 className="uppercase md:text-2xl text-sm text-white mr-[1vw] ">Type:</h1>
                                <h1 className="uppercase md:text-2xl text-sm text-red-600 ">{project.type}</h1>
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="uppercase md:text-2xl text-sm text-white mr-[1vw] ">YEAR:</h1>
                                    <h1 className="uppercase md:text-2xl text-sm text-red-600 ">{project.time}</h1>
                                </div>
                            </div>

                        </section>
                        
                    </article>

                    <article className=" ml-auto md:mr-[20vw] md:ml-auto mr-auto">
                            <UsedTechComponent images={techImages} />
                    </article>


                    {project.screenshots ? (<article className=" mt-[5vh] border-t-2 border-dotted ml-auto mr-auto mb-[8vh] ">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-[5vh] gap-y-[2vh] gap-x-[5vw] md:mt-[8vh] mt-[2vh]">
  {extraImages.map((img, index) => (
    <img
      key={index}
      src={img ?? ""}
      className="md:w-[45vw] w-[80vw] rounded-2xl cursor-pointer hover:scale-105 duration-200 border-2 border-white"
      onClick={() => setActiveImageIndex(index)}
    />
  ))}
</div>

                    </article>) : ( 
                      <div className="ml-auto mr-auto w-[90vw] md:w-[50vw] text-center ">
                            <div className={shippori.className}>
                                <h1 className="uppercase text-red-700 md:text-5xl text-xl border-2 border-dotted p-16 mb-[10vh] mt-[10vh]">No screenshots available :( </h1>
                            </div>
                      </div>
                    )}

                    

                </main>
                ) : (
                    <p>Project not found</p>
                )}
            </section>
        </main>
    );
};

export default ProjectDetailPage;
