import { Product } from "./Product";
import { User } from "./User";

export class Basket{
user:User;
token:string;
id?:number;
lignesProduit?:Product[];

    constructor(user:User, token:string, id?:number){
        this.user = user;
        this.token = token;
        this.id = id
    }
}