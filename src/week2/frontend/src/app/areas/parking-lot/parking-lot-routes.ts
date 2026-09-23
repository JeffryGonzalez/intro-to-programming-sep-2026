import { Routes } from '@angular/router';
import { Home } from './home';
import { Details } from './pages/details';
import { List } from './pages/list';
import { Add } from './pages/add';
import { ParkingLotStore } from './stores/parking-lot';
import { List2 } from './pages/list-two';

export const parkingLotRoutes: Routes = [
  {
    path: '',
    component: Home,
    providers: [ParkingLotStore],
    children: [
      {
        path: 'details/:id',
        component: Details,
      },
      {
        path: 'list',
        component: List,
      },
      {
        path: 'add',
        component: Add,
      },
    ],
  },
];
