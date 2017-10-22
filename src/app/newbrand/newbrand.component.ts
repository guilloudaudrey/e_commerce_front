import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand.service';
import { Brand } from '../shared/Brand';

@Component({
  selector: 'app-newbrand',
  templateUrl: './newbrand.component.html',
  styleUrls: ['./newbrand.component.css']
})
export class NewbrandComponent implements OnInit {
name:string;
liste = [];
brand:Brand;

  constructor(private brandService:BrandService) {

   }

  ngOnInit() {
   
this.brandService.getAllBrands().subscribe((brands)=>this.liste=brands);
  }

  addBrand(name){
    this.brandService.addBrand(new Brand(name)).subscribe((brand)=>this.liste.push(brand));
  }
  removeBrand(id:number){
    this.brandService.removeBrand(id).subscribe(() => this.ngOnInit());
  }

  // modifier(brand:Brand) {
  //   this.brandService.updateBrand(brand.id,brand)
  //   .subscribe(() => console.log(brand));
  // }
}
