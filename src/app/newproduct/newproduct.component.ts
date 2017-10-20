import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand.service';
import { CatService } from '../shared/category.service';
import { Product } from '../shared/Product';
import { ProductService } from '../shared/product.service';
import { Brand } from '../shared/Brand';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  ref:string;
  name:string;
  description:string;
  price:number;
  brandId:number;
  catId:number;
  listecat = [];
  listebrand = [];
  listeprod = [];
  brand:Brand;
  cat:Category;


  constructor(private productService:ProductService, private brandService:BrandService, private catService:CatService) {

   }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe((brands)=>this.listebrand=brands);
    this.catService.getAllCats().subscribe((cats)=>this.listecat=cats);
    this.productService.getAllProducts().subscribe((products)=>this.listeprod=products);
   
  }
  
  addProduct(){
    this.catService.getCatById(this.catId).subscribe((cat)=>{
    this.cat=cat;
    this.brandService.getBrandById(this.brandId).subscribe((brand)=>{
    this.brand = brand;
    this.productService.addProduct(new Product(this.ref, this.name, this.description, this.price, new Date, this.brand, this.cat)).subscribe((cat)=>console.log(cat));
  })
  })
    
  }

}
