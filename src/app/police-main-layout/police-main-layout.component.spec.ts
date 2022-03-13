import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceMainLayoutComponent } from './police-main-layout.component';

describe('PoliceMainLayoutComponent', () => {
  let component: PoliceMainLayoutComponent;
  let fixture: ComponentFixture<PoliceMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
