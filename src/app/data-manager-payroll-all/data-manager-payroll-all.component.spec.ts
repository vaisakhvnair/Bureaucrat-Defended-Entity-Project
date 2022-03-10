import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPayrollAllComponent } from './data-manager-payroll-all.component';

describe('DataManagerPayrollAllComponent', () => {
  let component: DataManagerPayrollAllComponent;
  let fixture: ComponentFixture<DataManagerPayrollAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPayrollAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPayrollAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
