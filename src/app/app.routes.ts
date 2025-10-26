import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Feed } from '../pages/feed/feed';
import { Profile } from '../pages/profile/profile';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'feed', component: Feed },
    { path: 'profile', component: Profile }
];
