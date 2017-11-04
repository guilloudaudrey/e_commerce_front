import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  listeUsers = [];
  user:User;

  constructor(private userService:UserService, private auth:AuthService) {
    this.auth.user.subscribe((user)=>this.user= user)
   }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users)=>this.listeUsers = users)
    console.log(this.user)
  }

 removeUser(id:number){
  this.userService.removeUser(id).subscribe(() => this.userService.getAllUsers().subscribe((user)=>this.listeUsers = user));
 }

}
