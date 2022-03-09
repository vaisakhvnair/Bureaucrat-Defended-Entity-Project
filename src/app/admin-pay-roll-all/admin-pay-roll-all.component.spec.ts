import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayRollAllComponent } from './admin-pay-roll-all.component';

describe('AdminPayRollAllComponent', () => {
  let component: AdminPayRollAllComponent;
  let fixture: ComponentFixture<AdminPayRollAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPayRollAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPayRollAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
