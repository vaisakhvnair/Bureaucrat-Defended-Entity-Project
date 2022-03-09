import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataManagerSearchComponent } from './admin-data-manager-search.component';

describe('AdminDataManagerSearchComponent', () => {
  let component: AdminDataManagerSearchComponent;
  let fixture: ComponentFixture<AdminDataManagerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataManagerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataManagerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
