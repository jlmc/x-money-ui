import { Component } from '@angular/core';

@Component({
  selector: 'app-app-activities-search',
  templateUrl: './app-activities-search.component.html',
  styleUrls: ['./app-activities-search.component.css']
})
export class AppActivitiesSearchComponent {

  activities = [
    {
      code: 1234,
      description: 'abcde',
      observation: 'this is dummmt',
      payday: new Date(2017, 8, 15),
      maturity: new Date(2017, 8, 15),
      value: 4567.98,
      type: 'EXPENSE',
      category: {
        code: 1
      },
      person: {
        name: 'Alvaro Morata'
      }
    },
    {
      code: 3456,
      description: 'tipo gtyu',
      observation: 'this is dummmt',
      payday: new Date('2017/12/01'),
      maturity: new Date(2017, 1, 1),
      value: 4567.98,
      type: 'EXPENSE',
      category: {
        code: 1
      },
      person: {
        name: 'Diego Maradona'
      }
    }
  ];

}
