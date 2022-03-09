import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCaseRegisterComponent } from './admin-case-register.component';

describe('AdminCaseRegisterComponent', () => {
  let component: AdminCaseRegisterComponent;
  let fixture: ComponentFixture<AdminCaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCaseRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
