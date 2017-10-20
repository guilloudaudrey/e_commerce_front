import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
  listeproducts = [];
  product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product)
  }


}
