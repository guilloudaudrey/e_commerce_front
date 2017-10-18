export class Product{
    id?:number;
    ref:string;
    name:string;
    description: string;
    price:number;
    datecreation:Date;
    brandId:number;
    catId:number;

    constructor(ref: string, 
        name:string, 
        description: string, 
        price:number, 
        datecreation: Date, 
        brandId:number, 
        catId: number, 
        id?:number)
        {
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.price = price;
        this.datecreation = datecreation;
        this.brandId = brandId;
        this.catId = catId;
        this.id = id;
    }
}