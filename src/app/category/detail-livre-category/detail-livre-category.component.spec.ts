import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivreCategoryComponent } from './detail-livre-category.component';

describe('DetailLivreCategoryComponent', () => {
  let component: DetailLivreCategoryComponent;
  let fixture: ComponentFixture<DetailLivreCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLivreCategoryComponent]
    });
    fixture = TestBed.createComponent(DetailLivreCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
