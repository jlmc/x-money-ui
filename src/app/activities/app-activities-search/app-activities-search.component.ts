import {Component, OnInit} from '@angular/core';
import {ActivityFilter, ActivityService} from '../activity.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './app-activities-search.component.html',
  styleUrls: ['./app-activities-search.component.css']
})
export class AppActivitiesSearchComponent implements OnInit {

  activities = [];
  filter: ActivityFilter = new ActivityFilter();

  constructor(private activityService: ActivityService ) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.activityService.search(this.filter)
      .then(b => {
        this.activities = b.activities;
      });
  }

}
