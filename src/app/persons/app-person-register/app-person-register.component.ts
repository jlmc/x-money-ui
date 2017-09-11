import {Component} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {PersonService} from "../PersonService";

@Component({
  selector: 'app-person-register',
  templateUrl: './app-person-register.component.html',
  styleUrls: ['./app-person-register.component.css']
})
export class AppPersonRegisterComponent {


  status: SelectItem[];

  val: string;

  constructor(private personService: PersonService) {
    this.status = [];
    this.status.push({label: 'Active', value: true});
    this.status.push({label: 'Inactive', value: false});
  }

  createPerson() {
    this.personService.log('creting ' + new Date());
  }

}
