import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiablePrescriptionsComponent } from './verifiable-prescriptions.component';

describe('VerifiablePrescriptionsComponent', () => {
  let component: VerifiablePrescriptionsComponent;
  let fixture: ComponentFixture<VerifiablePrescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiablePrescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiablePrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
