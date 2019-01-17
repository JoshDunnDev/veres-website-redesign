import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyResponderComponent } from './emergency-responder.component';

describe('EmergencyResponderComponent', () => {
  let component: EmergencyResponderComponent;
  let fixture: ComponentFixture<EmergencyResponderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyResponderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
