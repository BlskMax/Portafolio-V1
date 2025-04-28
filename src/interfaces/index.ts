

interface ISoftware {

    id:number;
    name:string;
    time:string;
    github:string;
    deployAvailable:boolean;
    deployLink:string;
    image:string;
    logo:string;
    altImage:string;
    type:string;
    description:string;
    extra1:string,
    extra2:string,
    extra3:string,
    extra4:string,
    tech1:string,
    tech2:string,
    tech3:string,
    tech4:string,
    tech5:string,
    tech6:string,
    tech7:string,
    tech8:string,
}

interface ISoftwareProps {
    software: ISoftware;
}

interface ISoftwareListProps {
    softwares:ISoftware[];
}

interface IGraphicThing {
    id:number;
    name:string;
    type:string;
    image:string;
}

interface IGraphicThingProps {
    graphic:IGraphicThing;
}

interface IGraphicThingListProps {
    graphics:IGraphicThing[];
}

export type {
    ISoftware,
    ISoftwareListProps,
    ISoftwareProps,
    IGraphicThing,
    IGraphicThingProps,
    IGraphicThingListProps
}