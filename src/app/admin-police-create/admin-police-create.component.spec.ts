import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceCreateComponent } from './admin-police-create.component';

describe('AdminPoliceCreateComponent', () => {
  let component: AdminPoliceCreateComponent;
  let fixture: ComponentFixture<AdminPoliceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
