import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientescitadosComponent } from './pacientescitados.component';

describe('PacientescitadosComponent', () => {
  let component: PacientescitadosComponent;
  let fixture: ComponentFixture<PacientescitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientescitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientescitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
