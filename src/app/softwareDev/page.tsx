import SoftwareList from "@/components/softwareList/SoftwareList";
import { allSoftwareList } from "@/data/data";
import { ISoftware } from "@/interfaces";
import Image from "next/image";

    async function fetchSoftware (): Promise <ISoftware[]> {
        return allSoftwareList
    }

async function softwareDev () {

    const softwares = await fetchSoftware(); 
  return (
    <main>

    <div className="w-screen h-auto">

        <SoftwareList softwares={softwares} />

    </div>  


    </main>
  );
}

export default softwareDev;
