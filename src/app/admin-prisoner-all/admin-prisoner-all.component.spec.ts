import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerAllComponent } from './admin-prisoner-all.component';

describe('AdminPrisonerAllComponent', () => {
  let component: AdminPrisonerAllComponent;
  let fixture: ComponentFixture<AdminPrisonerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
