import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInOutAllComponent } from './admin-in-out-all.component';

describe('AdminInOutAllComponent', () => {
  let component: AdminInOutAllComponent;
  let fixture: ComponentFixture<AdminInOutAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInOutAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInOutAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
