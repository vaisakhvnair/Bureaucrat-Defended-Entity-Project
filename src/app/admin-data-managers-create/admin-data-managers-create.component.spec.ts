import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagersCreateComponent } from './admin-data-managers-create.component';

describe('AdminDataManagersCreateComponent', () => {
  let component: AdminDataManagersCreateComponent;
  let fixture: ComponentFixture<AdminDataManagersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
