import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerDutyRegisterAllComponent } from './data-manager-duty-register-all.component';

describe('DataManagerDutyRegisterAllComponent', () => {
  let component: DataManagerDutyRegisterAllComponent;
  let fixture: ComponentFixture<DataManagerDutyRegisterAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerDutyRegisterAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerDutyRegisterAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
