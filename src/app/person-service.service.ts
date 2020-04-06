import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  peep: Person = new Person("Isabel", "Yellow");
  peep1: Person = new Person("Rodrigo", "Orange");
  peep2: Person = new Person("Tara", "Turquoise");
  peep3: Person = new Person("Peter", "Purple");
  peep4: Person = new Person("Mickey", "Magenta");
  People: Person[] = [this.peep, this.peep1, this.peep2, this.peep3, this.peep4];
  constructor() { 
  }

   
async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms));
}

  // getPerson(){return this.peep;}
  getPersonList(): Observable<any> {
    this.delay(4000);
    return of(this.People);
  }
}
