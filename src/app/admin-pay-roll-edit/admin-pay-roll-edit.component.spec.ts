import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayRollEditComponent } from './admin-pay-roll-edit.component';

describe('AdminPayRollEditComponent', () => {
  let component: AdminPayRollEditComponent;
  let fixture: ComponentFixture<AdminPayRollEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPayRollEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPayRollEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
