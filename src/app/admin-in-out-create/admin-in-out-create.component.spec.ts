import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInOutCreateComponent } from './admin-in-out-create.component';

describe('AdminInOutCreateComponent', () => {
  let component: AdminInOutCreateComponent;
  let fixture: ComponentFixture<AdminInOutCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInOutCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInOutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
