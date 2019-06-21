import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  private headers: HttpHeaders;
  private accessPointGetOrders = 'http://localhost:5000/api/order/';
  private accessPointGetOrdersByCustomer = 'http://localhost:5000/api/order/bycustomer/';
  private accessPointGetOrdersByState = 'http://localhost:5000/api/order/bystate/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

  public getOrders(page, limit) {
    return this.http.get(this.accessPointGetOrders + page + '/' + limit, { headers: this.headers });
  }
  public getOrdersByCustomer(n: number) {
    return this.http.get(this.accessPointGetOrdersByCustomer + n, { headers: this.headers });
  }
  public getOrdersByState() {
    return this.http.get(this.accessPointGetOrdersByState, { headers: this.headers });
  }

}
