import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerInOutAddComponent } from './data-manager-in-out-add.component';

describe('DataManagerInOutAddComponent', () => {
  let component: DataManagerInOutAddComponent;
  let fixture: ComponentFixture<DataManagerInOutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerInOutAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerInOutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
