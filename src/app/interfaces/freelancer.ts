import { Skills } from "../enums/skills";

export interface Freelancer {
    id:number,
    userId: number,
    skills: Skills[],
    freelancerLocation:string
}
