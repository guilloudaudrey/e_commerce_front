import { Basket } from "./Basket";
import { Product } from "./Product";

export class LignePanier{
    id?:number;
    basket:Basket;
    product:Product;


    constructor(basket:Basket, product:Product, id?:number){
     this.basket = basket;
     this.product = product;
    }
}