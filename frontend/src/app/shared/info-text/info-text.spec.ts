import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoText } from './info-text';

describe('InfoText', () => {
  let component: InfoText;
  let fixture: ComponentFixture<InfoText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoText],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
