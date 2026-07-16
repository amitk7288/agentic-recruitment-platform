import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDropdown } from './modal-dropdown';

describe('ModalDropdown', () => {
  let component: ModalDropdown;
  let fixture: ComponentFixture<ModalDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
