import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBarcoComponent } from './registrar-barco.component';

describe('RegistrarBarcoComponent', () => {
  let component: RegistrarBarcoComponent;
  let fixture: ComponentFixture<RegistrarBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
