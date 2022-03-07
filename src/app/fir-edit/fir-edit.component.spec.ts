import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIREditComponent } from './fir-edit.component';

describe('FIREditComponent', () => {
  let component: FIREditComponent;
  let fixture: ComponentFixture<FIREditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIREditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIREditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
