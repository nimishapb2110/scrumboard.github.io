import {Routes, RouterModule} from '@angular/router';
import { SbOverviewComponent } from './sb-overview/sb-overview.component';

const APP_ROUTES: Routes = [
   {path: "", component: SbOverviewComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);