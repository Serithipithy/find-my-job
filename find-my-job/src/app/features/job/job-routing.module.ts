import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobDetailsComponent } from './job-details';
import { JobListComponent } from './job-list';
import { JobPanelComponent } from './job-panel/job-panel.component';
import { JobAddComponent } from './job-add';
import { ExtrasComponent } from './extras/extras.component';

const routes: Routes = [
  {
    path: '',
    component: JobPanelComponent
  },
  {
    path: 'list',
    component: JobListComponent
  },
  {
    path: 'details/:id',
    component: JobDetailsComponent
  },
  {
    path: 'add-job',
    component: JobAddComponent
  },
  {
    path: 'extras',
    component: ExtrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
