import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPhoneComponent } from './form-new-phone.component';

describe('FormNewPhoneComponent', () => {
  let component: FormNewPhoneComponent;
  let fixture: ComponentFixture<FormNewPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
