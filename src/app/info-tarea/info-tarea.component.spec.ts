import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTareaComponent } from './info-tarea.component';

describe('InfoTareaComponent', () => {
  let component: InfoTareaComponent;
  let fixture: ComponentFixture<InfoTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
