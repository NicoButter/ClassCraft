import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'exercise', loadComponent: () => import('./pages/exercise-page/exercise-page.component').then(m => m.ExercisePageComponent) }
];
