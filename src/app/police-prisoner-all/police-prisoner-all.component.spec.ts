import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicePrisonerAllComponent } from './police-prisoner-all.component';

describe('PolicePrisonerAllComponent', () => {
  let component: PolicePrisonerAllComponent;
  let fixture: ComponentFixture<PolicePrisonerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicePrisonerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicePrisonerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
