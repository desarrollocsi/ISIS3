import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCreateComponent } from './programacion-create.component';

describe('ProgramacionCreateComponent', () => {
  let component: ProgramacionCreateComponent;
  let fixture: ComponentFixture<ProgramacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
