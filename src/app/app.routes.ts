import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Feed } from '../pages/feed/feed';
import { Profile } from '../pages/profile/profile';
import { PetCreateComponent } from '../pages/feed/create-pet/create-pet';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'feed', component: Feed },
    { path: 'profile', component: Profile },
    { path: 'create-pet', component: PetCreateComponent }
];
