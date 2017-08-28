import {Component} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-app-activity-register',
  templateUrl: './app-activity-register.component.html',
  styleUrls: ['./app-activity-register.component.css']
})
export class AppActivityRegisterComponent {

  types: SelectItem[];

  constructor() {

    this.types = [];
    this.types.push({label: 'Recipe', value: 'RECIPE'});
    this.types.push({label: 'Expense', value: 'EXPENSE'});

  }

}
