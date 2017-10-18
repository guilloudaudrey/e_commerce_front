import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand.service';
import { CatService } from '../shared/category.service';
import { Product } from '../shared/Product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  listecat = [];
  listebrand = [];
  listeprod = [];

  constructor(private productService:ProductService, private brandService:BrandService, private catService:CatService) { }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe((brands)=>this.listebrand=brands);
    this.catService.getAllCats().subscribe((cats)=>this.listecat=cats);
    this.productService.getAllProducts().subscribe((products)=>this.listeprod=products);
  }

  addProduct(ref, name, description, price, brandId, catId){
    this.productService.addProduct(new Product(ref, name, description, price, new Date, brandId, catId)).subscribe((product)=>this.listeprod.push(product));
  }

}