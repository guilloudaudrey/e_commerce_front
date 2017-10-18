import { Component, OnInit } from '@angular/core';
import { CatService } from '../shared/category.service';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  name:string;
  liste = [];

  constructor(private catService:CatService) { }

  ngOnInit() {
    this.catService.getAllCats().subscribe((cats)=>this.liste=cats);
  }

  addCat(name){
    this.catService.addCat(new Category(name)).subscribe((cat)=>this.liste.push(cat));
  }

}
