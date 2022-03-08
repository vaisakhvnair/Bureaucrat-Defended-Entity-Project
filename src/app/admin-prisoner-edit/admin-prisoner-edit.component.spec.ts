import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerEditComponent } from './admin-prisoner-edit.component';

describe('AdminPrisonerEditComponent', () => {
  let component: AdminPrisonerEditComponent;
  let fixture: ComponentFixture<AdminPrisonerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
