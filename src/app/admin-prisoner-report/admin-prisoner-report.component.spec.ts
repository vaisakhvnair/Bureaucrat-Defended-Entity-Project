import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerReportComponent } from './admin-prisoner-report.component';

describe('AdminPrisonerReportComponent', () => {
  let component: AdminPrisonerReportComponent;
  let fixture: ComponentFixture<AdminPrisonerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
