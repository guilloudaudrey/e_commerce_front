
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LignePanier } from './Lignepanier';
import { Basket } from './Basket';


@Injectable()
export class LignePanierService {
  private urlApi:string = 'http://localhost:3000/lignepanier';

  constructor(private http:HttpClient) { }

  getAllLignesPanier():Observable<LignePanier[]>{
    return this.http.get<LignePanier[]>(this.urlApi);
  }

  addLignePanier(lignepanier):Observable<LignePanier>{
    return this.http.post<LignePanier>(this.urlApi, lignepanier);
  }

  getLignePanierById(id:number):Observable<LignePanier> {
      return this.http.get<LignePanier>(this.urlApi+'/'+id);
}

  removeLignePanier(id):Observable<any>{
      return this.http.delete(this.urlApi+'/'+id);
  }

  updateLignePanier(id:number, lignepanier:LignePanier):Observable<LignePanier> {
    return this.http.patch<LignePanier>(this.urlApi+'/'+id,
     lignepanier);
}

getLignePanierByBasket(basket:number):Observable<LignePanier[]>{
  return this.http.post<LignePanier[]>(this.urlApi+'/basket', {basketId:basket}, )

}
}