import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// Definición de la interfaz Card según la estructura esperada de la API
export interface Card {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}

// Definición de la interfaz para la respuesta de la API
export interface ApiResponse {
  listCard: Card[];
}

// Servicio para manejar las operaciones relacionadas con las tarjetas
@Injectable({
  providedIn: 'root'
})

// Servicio para manejar las operaciones relacionadas con las tarjetas
export class CardsService {
  private readonly apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private readonly http: HttpClient) {}

  // Método para obtener las tarjetas desde la API
  getCards(): Observable<Card[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.listCard)
    );
  }
}
