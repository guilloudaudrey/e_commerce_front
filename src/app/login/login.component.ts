import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo:string;
  mdp:string;
  connected:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login({pseudo:this.pseudo})
    .subscribe((user)=>this.connected = user);
  }

  logout() {
    this.auth.logout();
    this.connected = false;
  }

}