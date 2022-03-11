import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrisonerEachSearchComponent } from './admin-prisoner-each-search.component';

describe('AdminPrisonerEachSearchComponent', () => {
  let component: AdminPrisonerEachSearchComponent;
  let fixture: ComponentFixture<AdminPrisonerEachSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrisonerEachSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrisonerEachSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
