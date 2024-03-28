import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobPanelComponent } from './job-panel/job-panel.component';

const routes: Routes = [
  {
    path: '',
    component: JobPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
