import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { LignePanierService } from '../shared/lignepanier.service';
import { LignePanier } from '../shared/Lignepanier';
import { User } from '../shared/User';
import { Basket } from '../shared/Basket';


@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
  listeproducts = [];
  aModifier:Product;
  product:Product;
  user:User;
  basket:Basket;

  constructor(private productService:ProductService, private lignepanierService:LignePanierService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product)
  }

  removeProduct(id:number){
    this.productService.removeProduct(id).subscribe(() => this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product));
  }

  editProd(product:Product) {
    this.productService.updateProduct(product.id,product)
    .subscribe(() => console.log(product));
  }

  addLignePanier(){
// this.lignepanierService.addLignePanier(new LignePanier())
  }


}
