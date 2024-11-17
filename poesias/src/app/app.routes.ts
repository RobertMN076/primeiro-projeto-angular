import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoesiasComponent } from './poesias/poesias.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, },
    {path: 'poesias', component: PoesiasComponent, }
];
