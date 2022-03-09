import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicePaySearchEachComponent } from './admin-police-pay-search-each.component';

describe('AdminPolicePaySearchEachComponent', () => {
  let component: AdminPolicePaySearchEachComponent;
  let fixture: ComponentFixture<AdminPolicePaySearchEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicePaySearchEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPolicePaySearchEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
