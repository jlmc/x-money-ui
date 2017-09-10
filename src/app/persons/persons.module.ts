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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppPersonGridComponent} from "./app-person-grid/app-person-grid.component";
import {AppPersonRegisterComponent} from "./app-person-register/app-person-register.component";
import {AppPersonsSearchComponent} from "./app-persons-search/app-persons-search.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
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
  declarations: [AppPersonGridComponent, AppPersonRegisterComponent, AppPersonsSearchComponent],
  exports: [AppPersonsSearchComponent, AppPersonRegisterComponent]
})
export class PersonsModule { }
