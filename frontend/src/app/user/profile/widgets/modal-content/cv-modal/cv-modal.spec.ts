import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvModal } from './cv-modal';

describe('CvModal', () => {
  let component: CvModal;
  let fixture: ComponentFixture<CvModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CvModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
