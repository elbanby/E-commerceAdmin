import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  getCarts(date?:any){
    let params = new HttpParams()
    params = params.append("startdate",date?.start).append("enddate",date?.end);
    console.log(params)
   return this.httpClient.get(environment.apipProd+'carts',{params})
  }
  deleteItem(id:number){
    return this.httpClient.delete(environment.apipProd+'carts/'+id)
  }
}
