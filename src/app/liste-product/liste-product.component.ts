import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { LignePanierService } from '../shared/lignepanier.service';
import { LignePanier } from '../shared/Lignepanier';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';
import { PanierService } from '../shared/panier.service';


@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
  listeproducts = [];
  aModifier:Product;
  product:Product;
  user:User;
  basket:Basket;

  constructor(private panierService:PanierService, private productService:ProductService, private lignepanierService:LignePanierService) { 

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product)

  }

  removeProduct(id:number){
    this.productService.removeProduct(id).subscribe(() => this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product));
  }

  editProd(product:Product) {
    this.productService.updateProduct(product.id,product)
    .subscribe(() => console.log(product));
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
