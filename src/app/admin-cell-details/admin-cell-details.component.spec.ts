import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCellDetailsComponent } from './admin-cell-details.component';

describe('AdminCellDetailsComponent', () => {
  let component: AdminCellDetailsComponent;
  let fixture: ComponentFixture<AdminCellDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCellDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
