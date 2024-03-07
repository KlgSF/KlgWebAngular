import { Routes } from '@angular/router';
import { HiringComponent } from './hiring/hiring.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [{
  path: 'hiring', component: HiringComponent
},
{
  path: '', component: LandingpageComponent
}];
