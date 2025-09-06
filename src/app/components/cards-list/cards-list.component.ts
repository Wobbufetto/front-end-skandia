import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardsService, Card } from '../../services/cards.service';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardModule, MatDivider],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];
  loading = true;
  error = '';

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe({
      next: (data) => {
        this.cards = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error cargando las tarjetas';
        this.loading = false;
      }
    });
  }
}
