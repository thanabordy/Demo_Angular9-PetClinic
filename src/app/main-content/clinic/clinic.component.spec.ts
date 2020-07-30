import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicComponent } from './clinic.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';
describe('ClinicComponent', () => {
  let component: ClinicComponent;
  let fixture: ComponentFixture<ClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        NetworkService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
