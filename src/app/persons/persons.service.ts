import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class PersonFilter {
  name: string;

  page = 0;
  size = 0;
}

@Injectable()
export class PersonsService {

  url = 'http://localhost:8080/persons';

  constructor(private http: Http) { }


  search(filter: PersonFilter = new PersonFilter()): Promise <any[]> {
    const params = new URLSearchParams();
    const headers = new Headers();

    if (filter.name) {
      params.set('name', filter.name);
    }

    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.url}`, { headers, search: params })
      .toPromise()
      .then(response => {
        console.log('result:: ' + response.json());

        return  response.json();
      });
  }

  public all(): Promise<any[]> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.get(`${this.url}`, { headers })
      .toPromise()
      .then(response => response.json());
  }
}
