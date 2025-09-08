import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { CardsService, Card } from './services/cards/cards.service';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: '<app-layout></app-layout>',
  
})
export class AppComponent {
  public title = 'front-end-skandia';
}
