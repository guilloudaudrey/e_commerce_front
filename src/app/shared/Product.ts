import { Brand } from "./Brand";
import { Category } from "./Category";

export class Product{
    id?:number;
    ref:string;
    name:string;
    description: string;
    price:number;
    datecreation:Date;
    brand:Brand;
    category:Category;

    constructor(ref: string, 
        name:string, 
        description: string, 
        price:number, 
        datecreation: Date, 
        brand:Brand, 
        category: Category, 
        id?:number)
        {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.price = price;
        this.datecreation = datecreation;
        this.brand = brand;
        this.category = category;
        this.id = id;
    }
}