import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasRealizadasComponent } from './tareas-realizadas.component';

describe('TareasRealizadasComponent', () => {
  let component: TareasRealizadasComponent;
  let fixture: ComponentFixture<TareasRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasRealizadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
