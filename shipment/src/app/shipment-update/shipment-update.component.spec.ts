import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentUpdateComponent } from './shipment-update.component';

describe('ShipmentUpdateComponent', () => {
  let component: ShipmentUpdateComponent;
  let fixture: ComponentFixture<ShipmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
