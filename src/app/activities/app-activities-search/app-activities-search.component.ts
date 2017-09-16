import {Component, OnInit} from '@angular/core';
import {ActivityFilter, ActivityService} from '../activity.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './app-activities-search.component.html',
  styleUrls: ['./app-activities-search.component.css']
})
export class AppActivitiesSearchComponent implements OnInit {

  activities = [];

  description: string;
  dueStartDate: Date;
  dueEndDate: Date;

  constructor(private activityService: ActivityService ) {}

  ngOnInit(): void {
    this.search();
  }


  search() {

    const filter: ActivityFilter = {
      description: this.description,
      dueStartDate: this.dueStartDate,
      dueEndDate: this.dueEndDate
    };

    this.activityService.search(filter)
      .then(b => this.activities = b);
  }

  /*[
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
];*/


}
