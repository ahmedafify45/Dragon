import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdactService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://run.mocky.io/v3/774fdda9-6a23-4502-aefa-443666ddbf0d');
  }
  getProductsById(id: any) {
    return this.http.get('https://run.mocky.io/v3/' + id);
  }
}
