import ContactComponent from "@/components/contactComponent/ContactComponent";
import FixedContactComponent from "@/components/fixedContactComponent/FixedContactComponent";
import GraphicList from "@/components/graphicList/GraphicList";
import { allGraphicList} from "@/data/data";
import { IGraphicThing } from "@/interfaces";

 function graphicDesign () {


  return (
    <main>

    <div className="w-screen h-auto">

        {/* <ContactComponent /> */}
      <FixedContactComponent />
    </div>  


    </main>
  );
}

export default graphicDesign;
