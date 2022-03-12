import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicePrisonerSearchComponent } from './police-prisoner-search.component';

describe('PolicePrisonerSearchComponent', () => {
  let component: PolicePrisonerSearchComponent;
  let fixture: ComponentFixture<PolicePrisonerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicePrisonerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicePrisonerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
