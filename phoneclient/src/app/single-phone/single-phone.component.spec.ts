import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhoneComponent } from './single-phone.component';

describe('SinglePhoneComponent', () => {
  let component: SinglePhoneComponent;
  let fixture: ComponentFixture<SinglePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
