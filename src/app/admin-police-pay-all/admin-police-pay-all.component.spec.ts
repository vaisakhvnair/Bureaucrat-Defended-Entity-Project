import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicePayAllComponent } from './admin-police-pay-all.component';

describe('AdminPolicePayAllComponent', () => {
  let component: AdminPolicePayAllComponent;
  let fixture: ComponentFixture<AdminPolicePayAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicePayAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPolicePayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
