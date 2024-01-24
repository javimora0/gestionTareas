import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInicioSesionComponent } from './modal-inicio-sesion.component';

describe('ModalInicioSesionComponent', () => {
  let component: ModalInicioSesionComponent;
  let fixture: ComponentFixture<ModalInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInicioSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
