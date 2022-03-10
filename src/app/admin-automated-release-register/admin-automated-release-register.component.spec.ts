import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutomatedReleaseRegisterComponent } from './admin-automated-release-register.component';

describe('AdminAutomatedReleaseRegisterComponent', () => {
  let component: AdminAutomatedReleaseRegisterComponent;
  let fixture: ComponentFixture<AdminAutomatedReleaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAutomatedReleaseRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAutomatedReleaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
