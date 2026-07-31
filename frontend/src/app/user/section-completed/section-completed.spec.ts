import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionCompleted } from './section-completed';

describe('SectionCompleted', () => {
  let component: SectionCompleted;
  let fixture: ComponentFixture<SectionCompleted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCompleted],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCompleted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
