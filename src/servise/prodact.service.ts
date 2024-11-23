import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/7c87926b-4333-450e-ac72-1a7caf5fce0a');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/' + id);
  }
}
