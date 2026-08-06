import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookingForModal } from './looking-for-modal';

describe('LookingForModal', () => {
  let component: LookingForModal;
  let fixture: ComponentFixture<LookingForModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookingForModal],
    }).compileComponents();

    fixture = TestBed.createComponent(LookingForModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
