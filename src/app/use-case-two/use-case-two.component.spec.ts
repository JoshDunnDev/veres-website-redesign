import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseTwoComponent } from './use-case-two.component';

describe('UseCaseTwoComponent', () => {
  let component: UseCaseTwoComponent;
  let fixture: ComponentFixture<UseCaseTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCaseTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
