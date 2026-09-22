import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'facilities',
    loadComponent: () =>
      import('./pages/facilities/facilities').then(m => m.Facilities)
  },
  {
    path: 'inspection-form',
    loadComponent: () =>
      import('./pages/inspection-form/inspection-form').then(m => m.InspectionForm)
  },
  {
    path: 'inspection-history',
    loadComponent: () =>
      import('./pages/inspection-history/inspection-history').then(m => m.InspectionHistory)
  },
  {
    path: 'facility/:id',
    loadComponent: () =>
      import('./pages/facility-details/facility-details')
        .then(m => m.FacilityDetails)
  }
];