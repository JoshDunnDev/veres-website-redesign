import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemTwoComponent } from './ecosystem-two.component';

describe('EcosystemTwoComponent', () => {
  let component: EcosystemTwoComponent;
  let fixture: ComponentFixture<EcosystemTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
