import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityService {

  url = 'http://localhost:8080/activities';

  constructor(private http: Http) { }


  search(): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.url}?summary`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

}
