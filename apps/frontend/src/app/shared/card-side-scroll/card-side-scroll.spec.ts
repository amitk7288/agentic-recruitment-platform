import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSideScroll } from './card-side-scroll';

describe('CardSideScroll', () => {
  let component: CardSideScroll;
  let fixture: ComponentFixture<CardSideScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSideScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSideScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
