import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileJobSearch } from './mobile-job-search';

describe('MobileJobSearch', () => {
  let component: MobileJobSearch;
  let fixture: ComponentFixture<MobileJobSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileJobSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileJobSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
