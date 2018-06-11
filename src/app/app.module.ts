import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinner } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { SbOverviewComponent } from './sb-overview/sb-overview.component';
import { routing } from './app.routing';
import { SbItemCreateEditComponent } from './sb-item-create-edit/sb-item-create-edit.component';
import { rootReducer, INITIAL_STATE, IAppState } from './shared/redux-store';


@NgModule({
  declarations: [
    AppComponent,
    SbOverviewComponent,
    SbItemCreateEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgReduxModule,
    NgxDnDModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [SbItemCreateEditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
