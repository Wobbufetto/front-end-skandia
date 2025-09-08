import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SharedMaterialModule } from "../../shared-material/shared-material.module";
import { CardsService, Card } from '../../services/cards/cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, SharedMaterialModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

// Componente para mostrar un carrusel de tarjetas
export class CarouselComponent implements OnInit {

  cards: Card[] = [];
  loading = true;
  error = '';

  currentIndex = 0;

  constructor(private cardsService: CardsService) {}

  // Carga las tarjetas al inicializar el componente
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

  // Verifica si el carrusel está en la primera o última tarjeta
  get isFirstSlide(): boolean {
    return this.currentIndex === 0;
  }

  // Verifica si el carrusel está en la última tarjeta
  get isLastSlide(): boolean {
    return this.currentIndex === this.cards.length;
  }

  // Navegación del carrusel
  nextSlide(): void {
    if (!this.isLastSlide) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (!this.isFirstSlide) {
      this.currentIndex--;
    }
  }
}
