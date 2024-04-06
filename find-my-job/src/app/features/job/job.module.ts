import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JobCardComponent } from '../../shared/components/job-card';
import { TitleCardComponent } from '../../shared/components/title-card';
import { JobAddComponent } from './job-add';
import { JobDetailsComponent } from './job-details';
import { JobListComponent } from './job-list';
import { JobPanelComponent } from './job-panel';
import { JobRoutingModule } from './job-routing.module';


@NgModule({
  declarations: [JobPanelComponent, JobListComponent, JobDetailsComponent, JobAddComponent],
  imports: [
    CommonModule,
    JobRoutingModule,
    TitleCardComponent,
    JobCardComponent
  ]
})
export class JobModule { }
