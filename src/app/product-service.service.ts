import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products").toPromise();
  }

  insertProducts(product) {
    return this.http.post(`http://localhost:3000/products/admin/1 `, product).toPromise()
  }
}
