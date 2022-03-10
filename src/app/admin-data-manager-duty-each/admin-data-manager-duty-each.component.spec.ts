import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagerDutyEachComponent } from './admin-data-manager-duty-each.component';

describe('AdminDataManagerDutyEachComponent', () => {
  let component: AdminDataManagerDutyEachComponent;
  let fixture: ComponentFixture<AdminDataManagerDutyEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagerDutyEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagerDutyEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
