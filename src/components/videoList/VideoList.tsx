'use client';
import { useState, useMemo } from "react";
import { IGraphicThing, IGraphicThingListProps, IVideoThing, IVideoThingListProps } from "@/interfaces";
import GraphicCard from "../graphicCard/GraphicCard";
import { Bebas_Neue, Shippori_Antique } from "next/font/google";
import VideoCard from "../videoCard/VideoCard";
import video from "@/app/video/page";

const shippori = Shippori_Antique({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

function VideoList({ videos }: IVideoThingListProps) {
  const [filter, setFilter] = useState<string>('all');

  
  const lists = useMemo(() => {
    const uniqueLists = new Set(videos.map(g => g.list?.toLowerCase()));
    return Array.from(uniqueLists).filter(Boolean); // evita undefined o null si los hay
  }, [videos]);


  const filteredVideos = useMemo(() => {
    if (filter === 'all') return videos;
    return videos.filter(g => g.list?.toLowerCase() === filter);
  }, [filter, videos]);

  return (
    <main className={`${bebas.className} w-screen mt-[5vh] flex flex-col items-center mb-[10vh]`}>

      <div className="flex flex-wrap justify-center gap-4 mb-[5vh] px-4">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-lg md:text-3xl md:px-4 md:py-2
            text-2xl px-3 py-1
            uppercase ${filter === 'all' ? 'bg-red-800 text-white' : 'bg-red-800 text-black'} transition-all duration-300 hover:scale-110`}
        >
            All
        </button>
        {lists.map(list => (
          <button
            key={list}
            onClick={() => setFilter(list)}
            className={`rounded-lg md:text-3xl md:px-4 md:py-2
              text-2xl px-3 py-1
               uppercase ${filter === list ? 'bg-red-800 text-white' : 'bg-red-800 text-black'} transition-all duration-300 hover:scale-110`}
          >
            {list}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[4vw] gap-y-[2vh] px-[2vw]">
        {filteredVideos.map((video: IVideoThing) => (
          <VideoCard video={video} key={`${video.name}-${video.image}`} />
        ))}
      </div>
    </main>
  );
}

export default VideoList;
