import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInOutEditComponent } from './admin-in-out-edit.component';

describe('AdminInOutEditComponent', () => {
  let component: AdminInOutEditComponent;
  let fixture: ComponentFixture<AdminInOutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInOutEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInOutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
