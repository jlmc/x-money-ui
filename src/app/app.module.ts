import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  CalendarModule,
  DataTableModule,
  DropdownModule, InputMaskModule,
  InputTextareaModule,
  SelectButtonModule,
  SharedModule,
  TabViewModule,
  TooltipModule
} from 'primeng/primeng';
// acording the PrimeNG documentation it could be better import the compoments one by one
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';

import {AppComponent} from './app.component';
import {AppActivitiesSearchComponent} from './app-activities-search/app-activities-search.component';
import {AppNavBarComponent} from './app-nav-bar/app-nav-bar.component';
import {AppPersonsSearchComponent} from './app-persons-search/app-persons-search.component';
import {AppActivityRegisterComponent} from './app-activity-register/app-activity-register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {AppPersonRegisterComponent} from './app-person-register/app-person-register.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppActivitiesSearchComponent,
    AppNavBarComponent,
    AppPersonsSearchComponent,
    AppActivityRegisterComponent,
    AppPersonRegisterComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , TabViewModule
    , InputTextModule
    , ButtonModule
    , DataTableModule
    , SharedModule
    , TooltipModule
    , InputTextareaModule
    , CalendarModule
    , BrowserAnimationsModule
    , SelectButtonModule
    , DropdownModule
    , InputMaskModule
    , CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
