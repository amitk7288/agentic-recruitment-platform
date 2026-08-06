import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecLocGridItem } from './sec-loc-grid-item';

describe('SecLocGridItem', () => {
  let component: SecLocGridItem;
  let fixture: ComponentFixture<SecLocGridItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecLocGridItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SecLocGridItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
