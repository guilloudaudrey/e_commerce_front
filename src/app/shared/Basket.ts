import { Product } from "./Product";
import { User } from "./User";
import { LignePanier } from "./Lignepanier";

export class Basket{
user:User;
token:string;
id?:number;
lignesProduit?:LignePanier[];

    constructor(user:User, token:string, id?:number){
        this.user = user;
        this.token = token;
        this.id = id
    }
}