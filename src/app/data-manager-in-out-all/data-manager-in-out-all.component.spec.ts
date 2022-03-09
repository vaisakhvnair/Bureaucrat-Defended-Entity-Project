import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerInOutAllComponent } from './data-manager-in-out-all.component';

describe('DataManagerInOutAllComponent', () => {
  let component: DataManagerInOutAllComponent;
  let fixture: ComponentFixture<DataManagerInOutAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerInOutAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerInOutAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
