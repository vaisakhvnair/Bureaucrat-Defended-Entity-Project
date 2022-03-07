import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRAllComponent } from './fir-all.component';

describe('FIRAllComponent', () => {
  let component: FIRAllComponent;
  let fixture: ComponentFixture<FIRAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIRAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIRAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
