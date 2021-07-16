import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTickeComponent } from './edit-ticket.component';

describe('EditTickeComponent', () => {
  let component: EditTickeComponent;
  let fixture: ComponentFixture<EditTickeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTickeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTickeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
