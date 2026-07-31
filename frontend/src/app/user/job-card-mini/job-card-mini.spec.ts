import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobCardMini } from './job-card-mini';

describe('JobCardMini', () => {
  let component: JobCardMini;
  let fixture: ComponentFixture<JobCardMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCardMini],
    }).compileComponents();

    fixture = TestBed.createComponent(JobCardMini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
