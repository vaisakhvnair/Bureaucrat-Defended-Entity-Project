import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerPrisonerCreateComponent } from './data-manager-prisoner-create.component';

describe('DataManagerPrisonerCreateComponent', () => {
  let component: DataManagerPrisonerCreateComponent;
  let fixture: ComponentFixture<DataManagerPrisonerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagerPrisonerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagerPrisonerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
