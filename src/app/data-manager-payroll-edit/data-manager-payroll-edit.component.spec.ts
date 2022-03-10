import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPayrollEditComponent } from './data-manager-payroll-edit.component';

describe('DataManagerPayrollEditComponent', () => {
  let component: DataManagerPayrollEditComponent;
  let fixture: ComponentFixture<DataManagerPayrollEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPayrollEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPayrollEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
