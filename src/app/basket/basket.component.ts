import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/panier.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user:User
  liste = []

  constructor(private panierService:PanierService, private auth:AuthService) {
    this.auth.user.subscribe((user) => this.user = user)
   }

  ngOnInit() {
 this.panierService.getBasketById(this.user.id)
  }


}
