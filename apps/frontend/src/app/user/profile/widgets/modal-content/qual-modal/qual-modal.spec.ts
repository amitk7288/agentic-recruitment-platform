import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualModal } from './qual-modal';

describe('QualModal', () => {
  let component: QualModal;
  let fixture: ComponentFixture<QualModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualModal],
    }).compileComponents();

    fixture = TestBed.createComponent(QualModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
