import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivityFilter, ActivityService} from '../activity.service';
import {LazyLoadEvent} from 'primeng/components/common/api';

@Component({
  selector: 'app-activities-search',
  templateUrl: './app-activities-search.component.html',
  styleUrls: ['./app-activities-search.component.css']
})
export class AppActivitiesSearchComponent implements OnInit {

  activities = [];
  totalActivities = 0;

  filter: ActivityFilter = new ActivityFilter();

  @ViewChild('activitieTable') activitiesGrid;

  constructor(private activityService: ActivityService ) {}

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
      this.activitiesGrid.first = 0;
    });
  }

}
