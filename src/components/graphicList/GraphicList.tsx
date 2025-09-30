'use client';
import { useState, useMemo } from "react";
import { IGraphicThing, IGraphicThingListProps } from "@/interfaces";
import GraphicCard from "../graphicCard/GraphicCard";
import { Bebas_Neue, Shippori_Antique } from "next/font/google";

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

function GraphicList({ graphics }: IGraphicThingListProps) {
  const [filter, setFilter] = useState<string>('all');

  
  const lists = useMemo(() => {
    const uniqueLists = new Set(graphics.map(g => g.list?.toLowerCase()));
    return Array.from(uniqueLists).filter(Boolean); 
  }, [graphics]);


  const filteredGraphics = useMemo(() => {
    if (filter === 'all') return graphics;
    return graphics.filter(g => g.list?.toLowerCase() === filter);
  }, [filter, graphics]);

  return (
    <main className={`${bebas.className} w-screen mt-[10vh] flex flex-col items-center mb-[10vh] text-center`}>
      <div className={bebas.className}>
        <h1 className="md:text-8xl text-6xl border-2 border-red-800 p-4 mb-[4vh]">Graphic Design</h1>
      </div>

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[4vw] gap-y-[2vh] px-[2vw]">
        {filteredGraphics.slice().reverse().map((graphic: IGraphicThing) => (
          <GraphicCard graphic={graphic} key={`${graphic.name}-${graphic.image}`} />
        ))}
      </div>
    </main>
  );
}

export default GraphicList;
