import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoLinkModal } from './demo-link-modal';

describe('DemoLinkModal', () => {
  let component: DemoLinkModal;
  let fixture: ComponentFixture<DemoLinkModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLinkModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoLinkModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
