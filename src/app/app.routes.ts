import {Routes} from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
 
export const routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutComponent},
];