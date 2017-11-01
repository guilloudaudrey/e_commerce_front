import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ProductService } from '../shared/product.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User
  connected:boolean;

  constructor(private userService:UserService, private productService:ProductService, 
  private auth:AuthService) { 
    this.auth.user.subscribe((user) => this.user = user)
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.connected = false;
  }

}
