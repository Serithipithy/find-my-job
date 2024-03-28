import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { 
        path: '',   redirectTo: '/dashboard', pathMatch: 'full' 
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'job', loadChildren: () => import('./features/job').then(m => m.JobModule)
    },
    {
        path: '**', component: NotFoundComponent
    }
];
