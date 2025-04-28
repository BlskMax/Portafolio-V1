import GraphicList from "@/components/graphicList/GraphicList";
import { allGraphicList} from "@/data/data";
import { IGraphicThing } from "@/interfaces";


    async function fetchGraphic (): Promise <IGraphicThing[]> {
      return allGraphicList
    }

async function graphicDesign () {

    const graphics = await fetchGraphic();

  return (
    <main>

    <div className="w-screen h-auto">

        <GraphicList graphics={graphics} />

    </div>  


    </main>
  );
}

export default graphicDesign;
