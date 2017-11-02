import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo:string;
  mdp:string;
  connected:boolean = false;
  user:User;
s
  constructor(private auth:AuthService) {
    this.auth.user.subscribe((user) => this.user = user)
   }

  ngOnInit() {
    console.log(this.user)
  }

  login() {
    this.auth.login({pseudo:this.pseudo})
    .subscribe(logged => this.connected = logged);
  }

  logout() {
    this.auth.logout();
    this.connected = false;
  }

}