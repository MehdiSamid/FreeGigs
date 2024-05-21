import { IUser } from "./iuser";

export interface Company {
    id:number ;
    idUser : IUser ;
    companyName: string,
    industry: string
}
