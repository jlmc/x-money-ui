import {Component, OnInit, ViewChild} from '@angular/core';

import {LazyLoadEvent} from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import {ActivityFilter, ActivityService} from '../activity.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './app-activities-search.component.html',
  styleUrls: ['./app-activities-search.component.css']
})
export class AppActivitiesSearchComponent implements OnInit {

  activities = [];
  totalActivities = 0;

  filter: ActivityFilter = new ActivityFilter();

  @ViewChild('activitiesTable') activitiesGrid;

  constructor(
    private activityService: ActivityService,
    private toasty: ToastyService) {}

  ngOnInit(): void {
    // this.search();
  }

  search(page = 0) {

    this.filter.page = page;

    this.activityService.search(this.filter)
      .then(b => {
        this.activities = b.activities;
        this.totalActivities = b.totalElements;
      });
  }

  onPageChange(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  delete (activity: any) {
    console.log(JSON.stringify(activity));
    this.activityService.delete(activity.code).then(() => {
      // this.activityService.search(this.filter);
      // we don't need the search method because by reset the grid paginantion we are going to execute the lazy load
      if (this.activitiesGrid.first === 0) {
        this.search();
      } else {
        this.activitiesGrid.first = 0;
      }

      // add message to display notification
      this.toasty.success('Activity deleted successfully!');

    });
  }

}
