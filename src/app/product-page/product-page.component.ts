import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product:Product;


  constructor(private route:ActivatedRoute, private productService:ProductService) {

   }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      if(parseInt(params.id) !== NaN) {
        this.productService.getProductById(params.id)
        .subscribe((product) => this.product = product)
      }else {
        this.product = null
      }
    });
    
  
  }
  }


