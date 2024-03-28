import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPanelComponent } from './job-panel.component';

describe('JobPanelComponent', () => {
  let component: JobPanelComponent;
  let fixture: ComponentFixture<JobPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
