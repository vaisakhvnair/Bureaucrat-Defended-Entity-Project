import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerMainLayoutComponent } from './data-manager-main-layout.component';

describe('DataManagerMainLayoutComponent', () => {
  let component: DataManagerMainLayoutComponent;
  let fixture: ComponentFixture<DataManagerMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
