import { Brand } from "./Brand";
import { Category } from "./Category";


export class Product{
    id?:number;
    ref:string;
    name:string;
    description: string;
    price:number;
    datecreation:Date;
    link:string;
    brand:Brand;
    category:Category;
    style:string;
    couleur:string;

    constructor(ref: string, 
        name:string, 
        description: string, 
        price:number, 
        datecreation: Date, 
        link:string,
        brand:Brand, 
        category: Category, 
        style:string,
        couleur:string,
        id?:number)
        {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.price = price;
        this.datecreation = datecreation;
        this.link = link
        this.brand = brand;
        this.category = category;
        this.id = id;
        this.couleur = couleur;
        this.style = style;
    }
}