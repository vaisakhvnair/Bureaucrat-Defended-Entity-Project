import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagersAllComponent } from './admin-data-managers-all.component';

describe('AdminDataManagersAllComponent', () => {
  let component: AdminDataManagersAllComponent;
  let fixture: ComponentFixture<AdminDataManagersAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagersAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
