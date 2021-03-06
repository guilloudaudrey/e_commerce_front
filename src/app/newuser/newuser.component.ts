import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../shared/user.service';
import 'rxjs/add/operator/toPromise';
import * as sha1 from 'js-sha1';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/User';
import { validatePassword } from '../shared/validators';
import { Basket } from '../shared/Basket';
import { PanierService } from '../shared/panier.service';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {
  formulaire:FormGroup;
  listeUsers = [];
  user:User;

  constructor(private auth:AuthService, private userService:UserService, private fb:FormBuilder, private panierService:PanierService) {
    this.auth.user.subscribe((user) => this.user = user)
  }

  ngOnInit() { 
    this.userService.getAllUsers().subscribe((users) => this.listeUsers = users);

    this.formulaire = this.fb.group ({
      pseudo:['',[Validators.required]],
      email:['',[Validators.required]],
      mdp:['',[Validators.required]],
      confirm:'',
    })
  }

  
  addUser(){
    this.userService.addUser(new User(
      this.formulaire.value.pseudo, 
      this.formulaire.value.email, 
      this.formulaire.value.mdp, 
      new Date))
      .subscribe((user) => {localStorage.setItem('token', user.token);
      
        this.panierService.addBasket(new Basket(user, localStorage.token)).subscribe()
      });      
    }


    
    removeUser(id:number){
  this.userService.removeUser(id).subscribe(() => this.userService.getAllUsers().subscribe((user)=>this.listeUsers = user));
}

}
