import {Component} from '@angular/core';

@Component({
  selector: 'app-app-persons-search',
  templateUrl: './app-persons-search.component.html',
  styleUrls: ['./app-persons-search.component.css']
})
export class AppPersonsSearchComponent {

  persons = [
    {
      code: '1',
      name: 'Cristiano Ronaldo',
      active: true,
      address: {
        city: 'Funchal',
        street: 'Eng. tico',
        zipCode: '234-432'
      }
    },
    {
      code: '2',
      name: 'Lionel Messi',
      active: true,
      address: {
        city: 'Barcelona',
        street: 'Camp now',
        zipCode: '1234-789'
      }
    },
    {
      code: '3',
      name: 'Zatan ibrahimovic',
      active: false,
      address: {
        city: 'manchester',
        street: 'old trafford',
        zipCode: '9878-789'
      }
    },
    {
      code: '4',
      name: 'Luisão',
      active: true,
      address: {
        city: 'Lisbon',
        street: 'estadio da Luz',
        zipCode: '1111-111'
      }
    },
    {
      code: '5',
      name: 'Diego Maradona',
      active: false,
      address: {
        city: 'Bueno Aires',
        street: 'la bombonera',
        zipCode: '1111-111'
      }
    }
  ];

}
