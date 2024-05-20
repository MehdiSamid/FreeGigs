import { Skills } from "../enums/skills";
import { IUser } from "./iuser";

export interface Freelancer extends IUser{
    skills: Skills[],
    freelancerLocation:string,
    IsAvailable:boolean,
}
