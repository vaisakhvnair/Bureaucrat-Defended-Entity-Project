import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayRollCreateComponent } from './admin-pay-roll-create.component';

describe('AdminPayRollCreateComponent', () => {
  let component: AdminPayRollCreateComponent;
  let fixture: ComponentFixture<AdminPayRollCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPayRollCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPayRollCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
