import { Category } from "./category";
import { User } from "./user";

export class Note {
    id:number;
    name:string;
    category:Category;
    creator:User;
    datetime:Date;
    description:string;
    state:State;
}


export enum State {
    TD = "To do",
    IP = "In progress",
    DN = "Done",
}