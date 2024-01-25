import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasIncompletasComponent } from './tareas-incompletas.component';

describe('TareasIncompletasComponent', () => {
  let component: TareasIncompletasComponent;
  let fixture: ComponentFixture<TareasIncompletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasIncompletasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasIncompletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
