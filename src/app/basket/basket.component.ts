import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/panier.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';
import { LignePanierService } from '../shared/lignepanier.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user:User
  basket:Basket;
 liste=[]

  constructor(private panierService:PanierService, private auth:AuthService, private lignePanier:LignePanierService) {
    this.auth.user.subscribe((user) => this.user = user)
   }

  ngOnInit() {
 this.panierService.getBasketByToken(localStorage.token).subscribe(panier=>{
  this.basket = panier;
  console.log(this.basket.id)
 this.lignePanier.getLignePanierByBasket(this.basket.id).subscribe(panier=>console.log(panier))
  })

  }
}
