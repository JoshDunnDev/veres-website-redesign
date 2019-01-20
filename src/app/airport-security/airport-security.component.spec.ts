import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSecurityComponent } from './airport-security.component';

describe('AirportSecurityComponent', () => {
  let component: AirportSecurityComponent;
  let fixture: ComponentFixture<AirportSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
