import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person-grid',
  templateUrl: './app-person-grid.component.html',
  styleUrls: ['./app-person-grid.component.css']
})
export class AppPersonGridComponent {

  @Input() persons = [];

}
