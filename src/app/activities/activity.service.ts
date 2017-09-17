import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class ActivityFilter {
  description: string;
  dueStartDate: Date;
  dueEndDate: Date;

  page = 0;
  size = 5;
}

export interface ActivitySearchPage {
  activities: any[];
  totalElements: number;
}

export interface ActivitySummary {
  code: string;
  description: string;
  observation: string;
  payday: Date;
  maturity: Date;
  value: number;
  type: string; // enum
  categoryName: string;
  personName: string;
}

@Injectable()
export class ActivityService {

  url = 'http://localhost:8080/activities';

  constructor(private http: Http) { }

  search(filter: ActivityFilter): Promise<ActivitySearchPage> {
    const params = new URLSearchParams();
    const headers = new Headers();

    if (filter.page) {
      params.set('page', filter.page.toString(10));
    }

    if (filter.size) {
      params.set('size', filter.size.toString());
    }

    if (filter.description) {
      params.set('description', filter.description);
    }

    if (filter.dueStartDate) {
      params.set('maturityFrom',  moment(filter.dueStartDate).format('YYYY-MM-DD'));
    }

    if (filter.dueEndDate) {
      params.set('maturityTo', moment(filter.dueEndDate).format('YYYY-MM-DD'));
    }

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.url}?summary`, { headers, search: params })
      .toPromise()
      .then(response => {
        console.log('result:: ' + response.json().content);

        const responseBody = response.json();
        const result = {
          activities: responseBody.content,
          totalElements: responseBody.totalElements
        };
        // return response.json().content;
        return result;

      });
  }

}
