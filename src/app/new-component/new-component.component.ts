import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  newbie: Person;
  people: Person[];
  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.getPeeps();
  }

  getPeeps(){
    this.personService.getPersonList()
    .subscribe(p => this.people = p);
  }

}
