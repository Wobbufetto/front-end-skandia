
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardsService, ApiResponse } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService]
    });
    service = TestBed.inject(CardsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cards on success', () => {
    const mockResponse: ApiResponse = {
      listCard: [
        { nameProduct: 'Cuenta 1', numberProduct: '123', balanceProduct: '1000', detaildProduct: 'Detalle 1' }
      ]
    };
    service.getCards().subscribe(cards => {
      expect(cards.length).toBe(1);
      expect(cards[0].nameProduct).toBe('Cuenta 1');
    });
    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error', () => {
    service.getCards().subscribe({
      next: () => fail('should have failed'),
      error: (err) => {
        expect(err).toBeTruthy();
      }
    });
    const req = httpMock.expectOne(service['apiUrl']);
    req.error(new ErrorEvent('Network error'));
  });
});
