import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceDutyEachComponent } from './admin-police-duty-each.component';

describe('AdminPoliceDutyEachComponent', () => {
  let component: AdminPoliceDutyEachComponent;
  let fixture: ComponentFixture<AdminPoliceDutyEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceDutyEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceDutyEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
