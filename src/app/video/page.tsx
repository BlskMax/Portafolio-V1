import VideoIntroComponent from "@/components/videoIntroComponent/VideoIntroComponent";
import VideoList from "@/components/videoList/VideoList";
import { allVideos } from "@/data/data";
import { IVideoThing } from "@/interfaces";
import { Bebas_Neue, Shippori_Antique } from "next/font/google";

    async function fetchVideos (): Promise <IVideoThing[]> {
      return allVideos
    }

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

 async function video () {

  const videos = await fetchVideos();

  return (
    <main className="mt-[12vh]">

      <VideoIntroComponent />

    <div className="w-screen h-auto">

        <VideoList videos={videos} />

    </div>  


    </main>
  );
}

export default video;
