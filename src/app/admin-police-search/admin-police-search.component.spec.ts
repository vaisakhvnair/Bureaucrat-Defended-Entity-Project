import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoliceSearchComponent } from './admin-police-search.component';

describe('AdminPoliceSearchComponent', () => {
  let component: AdminPoliceSearchComponent;
  let fixture: ComponentFixture<AdminPoliceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPoliceSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoliceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
