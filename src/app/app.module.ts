import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppNavBarComponent} from './app-nav-bar/app-nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonsModule} from './persons/persons.module';
import {ActivitiesModule} from './activities/activities.module';
// acording the PrimeNG documentation it could be better import the compoments one by one
// import {InputTextModule} from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent

  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule

    , PersonsModule
    , ActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
