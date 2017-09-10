import {Component} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-activity-register',
  templateUrl: './app-activity-register.component.html',
  styleUrls: ['./app-activity-register.component.css']
})
export class AppActivityRegisterComponent {

  types: SelectItem[];

  categories = [
    { label: 'Alimentation', value: 1 },
    { label: 'Transport', value: 2 },
  ];

  persons = [
    { label: 'Joao Viera Pinto', value: 3 },
    { label: 'Leonel Armando Messi', value: 2 },
    { label: 'Cristiano Ronaldo', value: 1 }
  ];

  constructor() {

    this.types = [];
    this.types.push({label: 'Recipe', value: 'RECIPE'});
    this.types.push({label: 'Expense', value: 'EXPENSE'});


  }

}
