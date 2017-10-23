import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/Product';
import { BrandService } from '../shared/brand.service';
import { CatService } from '../shared/category.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-update-product' ,
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  listecat = [];
  listebrand = [];
  @Input()
  product:Product;
  @Output()
  onSave:EventEmitter<Product> = new EventEmitter();

  constructor(private brandService:BrandService, private catService:CatService) { }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe((brands)=>this.listebrand=brands);
    this.catService.getAllCats().subscribe((cats)=>this.listecat=cats);
   
  }

  save() {
    this.onSave.emit(this.product);
  }



}
