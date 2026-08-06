import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectorsLocations } from './sectors-locations';

describe('SectorsLocations', () => {
  let component: SectorsLocations;
  let fixture: ComponentFixture<SectorsLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorsLocations],
    }).compileComponents();

    fixture = TestBed.createComponent(SectorsLocations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
