import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CardsService } from '../../services/cards.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockCards = [
  { nameProduct: 'Cuenta 1', numberProduct: '123', balanceProduct: '1000', detaildProduct: 'Detalle 1' },
  { nameProduct: 'Cuenta 2', numberProduct: '456', balanceProduct: '2000', detaildProduct: 'Detalle 2' }
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cardsServiceSpy: jasmine.SpyObj<CardsService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    cardsServiceSpy = jasmine.createSpyObj('CardsService', ['getCards']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: CardsService, useValue: cardsServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar las cards correctamente', () => {
    cardsServiceSpy.getCards.and.returnValue(of(mockCards));
    component.ngOnInit();
    expect(component.cards.length).toBe(2);
    expect(component.loading).toBeFalse();
    expect(component.error).toBe('');
  });

  it('debe manejar error al cargar las cards', () => {
    cardsServiceSpy.getCards.and.returnValue(throwError(() => new Error('Error')));
    component.ngOnInit();
    expect(component.cards.length).toBe(0);
    expect(component.loading).toBeFalse();
    expect(component.error).toBe('Error cargando las tarjetas');
  });

  it('debe navegar al objetivo al llamar goToObjective', () => {
    const card = mockCards[0];
    component.goToObjective(card);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/objective', card.nameProduct]);
  });
});
