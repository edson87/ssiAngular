import { Routes } from '@angular/router';

import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'catalog',     component: CatalogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent }
];
