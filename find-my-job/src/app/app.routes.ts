import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { 
        path: '',   redirectTo: '/dashboard', pathMatch: 'full' 
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
