import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerSearchComponent } from './admin-prisoner-search.component';

describe('AdminPrisonerSearchComponent', () => {
  let component: AdminPrisonerSearchComponent;
  let fixture: ComponentFixture<AdminPrisonerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
