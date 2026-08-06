import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpText } from './exp-text';

describe('ExpText', () => {
  let component: ExpText;
  let fixture: ComponentFixture<ExpText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpText],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
