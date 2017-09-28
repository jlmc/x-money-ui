import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';

import { ActivityFilter, ActivityService } from '../activity.service';

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
    private toasty: ToastyService,
    private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

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
    this.confirmationService.confirm({
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      message: 'Do you want to delete this record?',
      accept: () => {
        this.onConfirmDelete(activity);
      }
    });
  }

  onConfirmDelete(activity) {
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
