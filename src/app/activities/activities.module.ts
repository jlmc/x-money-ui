import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppActivitiesSearchComponent} from './app-activities-search/app-activities-search.component';
import {AppActivityRegisterComponent} from './app-activity-register/app-activity-register.component';
import {FormsModule} from '@angular/forms';
import {
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DropdownModule,
  InputMaskModule,
  InputTextModule,
  SelectButtonModule,
  SharedModule,
  TabViewModule,
  TooltipModule
} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {SharedModule as AppSharedModule} from '../shared/shared.module';
import {ActivityService} from "./activity.service";

@NgModule({
  imports: [
    CommonModule
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
    , AppSharedModule
  ],
  providers: [ActivityService],
  declarations: [
    AppActivitiesSearchComponent, AppActivityRegisterComponent
  ],
  exports: [AppActivitiesSearchComponent, AppActivityRegisterComponent]
})
export class ActivitiesModule { }
