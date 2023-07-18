import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCustomerLoanComponent } from './open-customer-loan.component';

describe('OpenCustomerLoanComponent', () => {
  let component: OpenCustomerLoanComponent;
  let fixture: ComponentFixture<OpenCustomerLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCustomerLoanComponent]
    });
    fixture = TestBed.createComponent(OpenCustomerLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
