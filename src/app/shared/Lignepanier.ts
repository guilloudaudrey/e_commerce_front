import { Basket } from "./Basket";
import { Product } from "./Product";

export class LignePanier{
    id?:number;
    price:number;
    basket:Basket;
    product:Product;


    constructor(price:number, basket:Basket, product:Product, id?:number){
     this.basket = basket;
     this.product = product;
     this.price = price;
    }
}