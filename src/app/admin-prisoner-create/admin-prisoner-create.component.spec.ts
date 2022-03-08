import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerCreateComponent } from './admin-prisoner-create.component';

describe('AdminPrisonerCreateComponent', () => {
  let component: AdminPrisonerCreateComponent;
  let fixture: ComponentFixture<AdminPrisonerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
