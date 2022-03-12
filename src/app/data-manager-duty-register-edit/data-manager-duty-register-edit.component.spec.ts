import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerDutyRegisterEditComponent } from './data-manager-duty-register-edit.component';

describe('DataManagerDutyRegisterEditComponent', () => {
  let component: DataManagerDutyRegisterEditComponent;
  let fixture: ComponentFixture<DataManagerDutyRegisterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerDutyRegisterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerDutyRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
