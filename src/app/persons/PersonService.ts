import {Inject} from '@angular/core';

export class PersonService {

  constructor(@Inject('myLogPrefix') private prefix: string) {}

  log(value: string) {
    console.log(`${this.prefix}:::: ${value}`);
  }

}
