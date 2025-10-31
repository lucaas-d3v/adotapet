import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Feed } from '../pages/feed/feed';
import { Profile } from '../pages/profile/profile';
import { Register } from '../pages/register/register';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'feed', component: Feed },
    { path: 'profile', component: Profile },
    { path: 'register', component: Register }
];
