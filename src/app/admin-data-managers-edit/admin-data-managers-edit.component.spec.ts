import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagersEditComponent } from './admin-data-managers-edit.component';

describe('AdminDataManagersEditComponent', () => {
  let component: AdminDataManagersEditComponent;
  let fixture: ComponentFixture<AdminDataManagersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
