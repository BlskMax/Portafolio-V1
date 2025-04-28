import ContactComponent from "@/components/contactComponent/ContactComponent";
import GraphicList from "@/components/graphicList/GraphicList";
import { allGraphicList} from "@/data/data";
import { IGraphicThing } from "@/interfaces";

 function graphicDesign () {


  return (
    <main>

    <div className="w-screen h-auto">

        <ContactComponent />

    </div>  


    </main>
  );
}

export default graphicDesign;
