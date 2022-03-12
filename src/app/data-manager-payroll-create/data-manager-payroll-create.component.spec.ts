import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPayrollCreateComponent } from './data-manager-payroll-create.component';

describe('DataManagerPayrollCreateComponent', () => {
  let component: DataManagerPayrollCreateComponent;
  let fixture: ComponentFixture<DataManagerPayrollCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPayrollCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPayrollCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
