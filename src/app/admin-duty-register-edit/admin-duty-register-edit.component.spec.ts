import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDutyRegisterEditComponent } from './admin-duty-register-edit.component';

describe('AdminDutyRegisterEditComponent', () => {
  let component: AdminDutyRegisterEditComponent;
  let fixture: ComponentFixture<AdminDutyRegisterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDutyRegisterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDutyRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
