import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPrisonerSearchComponent } from './data-manager-prisoner-search.component';

describe('DataManagerPrisonerSearchComponent', () => {
  let component: DataManagerPrisonerSearchComponent;
  let fixture: ComponentFixture<DataManagerPrisonerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPrisonerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPrisonerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
