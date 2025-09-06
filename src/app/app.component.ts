import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { CardsService, Card } from './services/cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SharedMaterialModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end-skandia';
  cards: Card[] = [];
  loading = true;
  error = '';

  constructor(private readonly cardsService: CardsService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardsService.getCards().subscribe({
      next: (data) => {
        this.cards = data;
        this.loading = false;
        console.log('Datos cargados:', data);
      },
      error: (err) => {
        this.error = 'Error cargando los productos';
        this.loading = false;
        console.error('Error al cargar los datos:', err);
      }
    });
  }

  formatBalance(balance: string): string {
    const number = parseInt(balance, 10);
    return number.toLocaleString('es-CO');
  }
}
