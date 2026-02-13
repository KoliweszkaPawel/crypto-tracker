import { Routes } from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {CoinDetails} from './coin-details/coin-details';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'coin/:id', component: CoinDetails },
  { path: '**', redirectTo: 'dashboard'}
];
