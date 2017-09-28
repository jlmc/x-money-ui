import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';


import {AppComponent} from './app.component';
import {AppNavBarComponent} from './core/app-nav-bar/app-nav-bar.component';
import {PersonsModule} from './persons/persons.module';
import {ActivitiesModule} from './activities/activities.module';
import {CoreModule} from './core/core.module';



// acording the PrimeNG documentation it could be better import the compoments one by one
// import {InputTextModule} from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , HttpModule

    , ToastyModule.forRoot()
    , ConfirmDialogModule

    , CoreModule
    , PersonsModule
    , ActivitiesModule
  ],
  providers: [
    ConfirmationService
    , { provide: LOCALE_ID, useValue: 'en-US' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
