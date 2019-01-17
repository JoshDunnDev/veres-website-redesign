import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseThreeComponent } from './use-case-three.component';

describe('UseCaseThreeComponent', () => {
  let component: UseCaseThreeComponent;
  let fixture: ComponentFixture<UseCaseThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCaseThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
