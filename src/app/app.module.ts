import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  CalendarModule,
  DataTableModule,
  DropdownModule,
  InputMaskModule,
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
import {AppNavBarComponent} from './app-nav-bar/app-nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {FormsModule} from '@angular/forms';
import {MessageComponent} from './message/message.component';
import {PersonsModule} from './persons/persons.module';
import {ActivitiesModule} from './activities/activities.module';

/*
AppActivitiesSearchComponent,
  AppPersonsSearchComponent,
  AppActivityRegisterComponent,
  AppPersonRegisterComponent,
  AppPersonGridComponent,
*/
@NgModule({
  declarations: [
    AppComponent,



    AppNavBarComponent,
    MessageComponent
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

    , PersonsModule
    , ActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
