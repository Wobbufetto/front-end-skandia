import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Card {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}

export interface ApiResponse {
  listCard: Card[];
}

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private readonly apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private readonly http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.listCard)
    );
  }
}
