import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDutyRegisterCreateComponent } from './admin-duty-register-create.component';

describe('AdminDutyRegisterCreateComponent', () => {
  let component: AdminDutyRegisterCreateComponent;
  let fixture: ComponentFixture<AdminDutyRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDutyRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDutyRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
