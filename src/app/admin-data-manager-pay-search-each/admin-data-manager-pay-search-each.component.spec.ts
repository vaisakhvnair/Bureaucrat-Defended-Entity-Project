import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagerPaySearchEachComponent } from './admin-data-manager-pay-search-each.component';

describe('AdminDataManagerPaySearchEachComponent', () => {
  let component: AdminDataManagerPaySearchEachComponent;
  let fixture: ComponentFixture<AdminDataManagerPaySearchEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagerPaySearchEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagerPaySearchEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
