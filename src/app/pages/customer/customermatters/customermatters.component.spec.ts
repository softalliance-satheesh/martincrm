import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermattersComponent } from './customermatters.component';

describe('CustomermattersComponent', () => {
  let component: CustomermattersComponent;
  let fixture: ComponentFixture<CustomermattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomermattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomermattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
