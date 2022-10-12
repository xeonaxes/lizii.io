import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVervveyComponent } from './product-vervvey.component';

describe('ProductVervveyComponent', () => {
  let component: ProductVervveyComponent;
  let fixture: ComponentFixture<ProductVervveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVervveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVervveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
