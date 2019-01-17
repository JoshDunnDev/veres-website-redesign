import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseOneComponent } from './use-case-one.component';

describe('UseCaseOneComponent', () => {
  let component: UseCaseOneComponent;
  let fixture: ComponentFixture<UseCaseOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCaseOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
