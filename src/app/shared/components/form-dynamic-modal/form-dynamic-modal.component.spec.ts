import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicModalComponent } from './form-dynamic-modal.component';

describe('FormDynamicModalComponent', () => {
  let component: FormDynamicModalComponent;
  let fixture: ComponentFixture<FormDynamicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
