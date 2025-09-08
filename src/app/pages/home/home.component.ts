import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardsService, Card } from '../../services/cards.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatChipsModule, CarouselComponent, MatSidenavModule , MatListModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  loading = true;
  error = '';
  events: string[] = [];
  opened: boolean = false;

  constructor(private cardsService: CardsService, private router: Router) {}

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

  goToObjective(card: Card) {
    this.router.navigate(['/objective', card.nameProduct]);
  }
}
