import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFourZeroFourComponent } from './error-four-zero-four.component';

describe('ErrorFourZeroFourComponent', () => {
  let component: ErrorFourZeroFourComponent;
  let fixture: ComponentFixture<ErrorFourZeroFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFourZeroFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFourZeroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
