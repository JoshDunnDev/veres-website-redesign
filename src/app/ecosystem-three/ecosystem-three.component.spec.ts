import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemThreeComponent } from './ecosystem-three.component';

describe('EcosystemThreeComponent', () => {
  let component: EcosystemThreeComponent;
  let fixture: ComponentFixture<EcosystemThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
