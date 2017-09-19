import {Component, OnInit} from '@angular/core';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-persons-search',
  templateUrl: './app-persons-search.component.html',
  styleUrls: ['./app-persons-search.component.css']
})
export class AppPersonsSearchComponent implements OnInit {

  persons: any[] = [];

  constructor(private personsServices: PersonsService) {}

  ngOnInit(): void {
    this.personsServices.search().then(ps => {
      this.persons = ps;
    });
  }
}
