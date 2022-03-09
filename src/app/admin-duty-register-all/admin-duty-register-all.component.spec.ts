import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDutyRegisterAllComponent } from './admin-duty-register-all.component';

describe('AdminDutyRegisterAllComponent', () => {
  let component: AdminDutyRegisterAllComponent;
  let fixture: ComponentFixture<AdminDutyRegisterAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDutyRegisterAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDutyRegisterAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
