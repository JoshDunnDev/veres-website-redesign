import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemOneComponent } from './ecosystem-one.component';

describe('EcosystemOneComponent', () => {
  let component: EcosystemOneComponent;
  let fixture: ComponentFixture<EcosystemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
