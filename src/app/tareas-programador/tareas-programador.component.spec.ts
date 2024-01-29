import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasProgramadorComponent } from './tareas-programador.component';

describe('TareasProgramadorComponent', () => {
  let component: TareasProgramadorComponent;
  let fixture: ComponentFixture<TareasProgramadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasProgramadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
