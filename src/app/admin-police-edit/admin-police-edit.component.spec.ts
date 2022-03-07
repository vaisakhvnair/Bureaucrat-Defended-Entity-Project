import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceEditComponent } from './admin-police-edit.component';

describe('AdminPoliceEditComponent', () => {
  let component: AdminPoliceEditComponent;
  let fixture: ComponentFixture<AdminPoliceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
