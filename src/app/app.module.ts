import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabViewModule, TooltipModule} from 'primeng/primeng';

// acording the PrimeNG documentation it could be better import the compoments one by one
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import {DataTableModule, SharedModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppActivitiesSearchComponent } from './app-activities-search/app-activities-search.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppActivitiesSearchComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule
    , TabViewModule
    , InputTextModule
    , ButtonModule
    , DataTableModule
    , SharedModule
    , TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
