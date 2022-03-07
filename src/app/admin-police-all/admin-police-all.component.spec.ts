import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceAllComponent } from './admin-police-all.component';

describe('AdminPoliceAllComponent', () => {
  let component: AdminPoliceAllComponent;
  let fixture: ComponentFixture<AdminPoliceAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
