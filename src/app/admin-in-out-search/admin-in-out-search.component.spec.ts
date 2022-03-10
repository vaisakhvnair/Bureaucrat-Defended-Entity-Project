import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInOutSearchComponent } from './admin-in-out-search.component';

describe('AdminInOutSearchComponent', () => {
  let component: AdminInOutSearchComponent;
  let fixture: ComponentFixture<AdminInOutSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInOutSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInOutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
