import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPod } from './info-pod';

describe('InfoPod', () => {
  let component: InfoPod;
  let fixture: ComponentFixture<InfoPod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPod],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
