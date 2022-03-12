import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerInOutEditComponent } from './data-manager-in-out-edit.component';

describe('DataManagerInOutEditComponent', () => {
  let component: DataManagerInOutEditComponent;
  let fixture: ComponentFixture<DataManagerInOutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerInOutEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerInOutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
