import { Routes } from '@angular/router';
import { Home } from './home';
import { Deposit } from './deposit';
import { Withdraw } from './withdraw';

export const bankingRoutes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'deposit',
        component: Deposit,
      },
      {
        path: 'withdraw',
        component: Withdraw,
      },
    ],
  },
];
