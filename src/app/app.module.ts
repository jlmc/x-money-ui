import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppNavBarComponent} from './core/app-nav-bar/app-nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonsModule} from './persons/persons.module';
import {ActivitiesModule} from './activities/activities.module';
import {CoreModule} from './core/core.module';
import {HttpModule} from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
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

    , CoreModule
    , PersonsModule
    , ActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
