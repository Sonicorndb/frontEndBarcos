import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBarcoComponent } from './actualizar-barco.component';

describe('ActualizarBarcoComponent', () => {
  let component: ActualizarBarcoComponent;
  let fixture: ComponentFixture<ActualizarBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
