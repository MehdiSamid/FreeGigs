import { IUser } from "./iuser";

export interface Company extends IUser {
    companyName: string,
    industry: string
}
