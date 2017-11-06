import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { PanierService } from '../shared/panier.service';
import { LignePanierService } from '../shared/lignepanier.service';
import { LignePanier } from '../shared/Lignepanier';
import { Basket } from '../shared/Basket';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product:Product;
  basket:Basket;


  constructor(private lignepanierService:LignePanierService, private panierService:PanierService, private route:ActivatedRoute, private productService:ProductService) {

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

  addLignePanier(id:number){
    // this.lignepanierService.addLignePanier(new LignePanier())
    this.panierService.getBasketByToken(localStorage.token).subscribe((panier)=>{
    this.basket = panier;
    this.productService.getProductById(id).subscribe((product)=>{this.product = product;
      this.lignepanierService.addLignePanier(new LignePanier(this.basket, this.product))
      .subscribe((lignepanier)=>console.log(lignepanier))
    })
    })
    
      }
  }


