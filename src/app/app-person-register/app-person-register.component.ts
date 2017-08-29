import {Component} from '@angular/core';
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-app-person-register',
  templateUrl: './app-person-register.component.html',
  styleUrls: ['./app-person-register.component.css']
})
export class AppPersonRegisterComponent {

  status: SelectItem[];

  val: string;

  constructor() {
    this.status = [];
    this.status.push({label: 'Active', value: true});
    this.status.push({label: 'Inactive', value: false});
  }

}
