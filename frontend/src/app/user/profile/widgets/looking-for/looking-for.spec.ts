import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookingFor } from './looking-for';

describe('LookingFor', () => {
  let component: LookingFor;
  let fixture: ComponentFixture<LookingFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookingFor],
    }).compileComponents();

    fixture = TestBed.createComponent(LookingFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
