import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTurboCardComponent } from './product-turbo-card.component';

describe('ProductTurboCardComponent', () => {
  let component: ProductTurboCardComponent;
  let fixture: ComponentFixture<ProductTurboCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTurboCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTurboCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
