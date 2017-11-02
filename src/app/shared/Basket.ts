import { Product } from "./Product";
import { User } from "./User";

export class Basket{
user:User;
id?:number;
lignesProduit?:Product[];

    constructor(user:User, id?:number){
        this.user = user;
        this.id = id
    }
}