import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerDutyRegisterCreateComponent } from './data-manager-duty-register-create.component';

describe('DataManagerDutyRegisterCreateComponent', () => {
  let component: DataManagerDutyRegisterCreateComponent;
  let fixture: ComponentFixture<DataManagerDutyRegisterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerDutyRegisterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerDutyRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
