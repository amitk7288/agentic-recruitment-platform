import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualificationsText } from './qualifications-text';

describe('QualificationsText', () => {
  let component: QualificationsText;
  let fixture: ComponentFixture<QualificationsText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationsText],
    }).compileComponents();

    fixture = TestBed.createComponent(QualificationsText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
