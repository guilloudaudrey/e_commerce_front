import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  listeUsers = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users)=>this.listeUsers = users)
  }

 removeUser(id:number){
  this.userService.removeUser(id).subscribe(() => this.userService.getAllUsers().subscribe((user)=>this.listeUsers = user));
 }

}
