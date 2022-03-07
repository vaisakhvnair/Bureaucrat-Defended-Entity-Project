import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIRCreateComponent } from './fir-create.component';

describe('FIRCreateComponent', () => {
  let component: FIRCreateComponent;
  let fixture: ComponentFixture<FIRCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIRCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIRCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
