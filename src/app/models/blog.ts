import { subHeading } from "./subHeading";

export interface blog{

    mainHeading: string;
    subHeading:subHeading[];
    tags:string[];
    mainContent: string;
    comment:string[];   
    postedOn:Date;
    postedBy:string;
}