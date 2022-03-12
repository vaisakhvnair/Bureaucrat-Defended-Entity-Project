import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPrisonerAllComponent } from './data-manager-prisoner-all.component';

describe('DataManagerPrisonerAllComponent', () => {
  let component: DataManagerPrisonerAllComponent;
  let fixture: ComponentFixture<DataManagerPrisonerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPrisonerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPrisonerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
