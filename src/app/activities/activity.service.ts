import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface ActivityFilter {
  description: string
}


@Injectable()
export class ActivityService {

  url = 'http://localhost:8080/activities';

  constructor(private http: Http) { }

  search(filter: ActivityFilter): Promise<any> {
    const params = new URLSearchParams();



    const headers = new Headers();

    if (filter.description) {

      alert(`Desc: ${JSON.stringify(filter)}`)

      params.set('description', filter.description);
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
