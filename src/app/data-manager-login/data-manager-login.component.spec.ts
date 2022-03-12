import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerLoginComponent } from './data-manager-login.component';

describe('DataManagerLoginComponent', () => {
  let component: DataManagerLoginComponent;
  let fixture: ComponentFixture<DataManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
