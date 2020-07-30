import { TestBed } from '@angular/core/testing';
import { HttpClientModule  } from '@angular/common/http';
import { NetworkService } from './network.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('NetworkService', () => {
  let service: NetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
    ],
    });
    service = TestBed.inject(NetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
