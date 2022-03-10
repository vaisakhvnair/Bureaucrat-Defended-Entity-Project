import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagerPayAllComponent } from './admin-data-manager-pay-all.component';

describe('AdminDataManagerPayAllComponent', () => {
  let component: AdminDataManagerPayAllComponent;
  let fixture: ComponentFixture<AdminDataManagerPayAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagerPayAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagerPayAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
