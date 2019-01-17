import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemFourComponent } from './ecosystem-four.component';

describe('EcosystemFourComponent', () => {
  let component: EcosystemFourComponent;
  let fixture: ComponentFixture<EcosystemFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
