import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPrisonerEditComponent } from './data-manager-prisoner-edit.component';

describe('DataManagerPrisonerEditComponent', () => {
  let component: DataManagerPrisonerEditComponent;
  let fixture: ComponentFixture<DataManagerPrisonerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPrisonerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPrisonerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
