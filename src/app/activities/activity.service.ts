import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export interface ActivityFilter {
  description: string;
  dueStartDate: Date;
  dueEndDate: Date;

}


@Injectable()
export class ActivityService {

  url = 'http://localhost:8080/activities';

  constructor(private http: Http) { }

  search(filter: ActivityFilter): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

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
        return response.json().content;
      });
  }

}
