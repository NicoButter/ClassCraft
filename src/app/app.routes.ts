import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'entrenar',
    loadComponent: () => import('./pages/training-page/training-page.component').then(m => m.TrainingPageComponent)
  },
  {
    path: 'entrenar/:tpId',
    loadComponent: () => import('./pages/practical-detail/practical-detail.component').then(m => m.PracticalDetailComponent)
  },
  {
    path: 'entrenar/:tpId/:exerciseId',
    loadComponent: () => import('./pages/exercise-page/exercise-page.component').then(m => m.ExercisePageComponent)
  }
];
