import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmatDataSharingComponent } from './hazmat-data-sharing.component';

describe('HazmatDataSharingComponent', () => {
  let component: HazmatDataSharingComponent;
  let fixture: ComponentFixture<HazmatDataSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazmatDataSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazmatDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
