import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/panier.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';
import { LignePanierService } from '../shared/lignepanier.service';
import { ProductService } from '../shared/product.service';
import { LignePanier } from '../shared/Lignepanier';
import { Product } from '../shared/Product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user:User
  basket:Basket;
  liste=[];
  product:Product;

  constructor(private lignepanierService:LignePanierService, private productService:ProductService, private panierService:PanierService, private auth:AuthService, private lignePanier:LignePanierService) {
    
   }

  ngOnInit() {
    this.auth.user.subscribe((user) => this.user = user)
 this.panierService.getBasketByToken(localStorage.token).subscribe(panier=>{
  this.basket = panier;
  console.log(this.basket.id)
 this.lignePanier.getLignePanierByBasket(this.basket.id).subscribe(ligne=>{
   this.basket.lignesProduit = ligne;

    })
  })

  }

  lister(){
    console.log(this.liste)
  }

  addLignePanier(id:number){
    // this.lignepanierService.addLignePanier(new LignePanier())
    this.panierService.getBasketByToken(localStorage.token).subscribe((panier)=>{
    this.basket = panier;
    this.productService.getProductById(id).subscribe((product)=>{this.product = product;
      this.lignepanierService.addLignePanier(new LignePanier(this.product.price, this.basket, this.product))
      .subscribe((lignepanier)=>console.log(lignepanier))
    })
    })

      }

      removeLignePanier(id:number){
        this.lignepanierService.removeLignePanier(id)
      }
}
