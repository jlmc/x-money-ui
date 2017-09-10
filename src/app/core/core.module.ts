import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNavBarComponent} from './app-nav-bar/app-nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppNavBarComponent],
  exports: [AppNavBarComponent]
})
export class CoreModule { }
