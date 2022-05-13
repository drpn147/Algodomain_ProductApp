import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {}

  getProductDetails(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/product/displayall/');
  }

  deleteProductDetails(productId: any): Observable<any>{
    return this.http.delete<any>('http://localhost:8080/product/delete/'+productId);
  }

  createProductDetails(product: Product,vendorId:any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/product/save/'+vendorId,product);
  }
  getproductDetailsById(productId: any): Observable<any>{
    return this.http.get<any>("http://localhost:8080/product/display/"+productId);
  }
  getvendorDetailsById(vendorId: any): Observable<any>{
    return this.http.get<any>("http://localhost:8080/vendor/display/"+vendorId);
  }

}
