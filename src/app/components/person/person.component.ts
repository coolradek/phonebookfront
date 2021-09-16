import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  person: Person;
  personList: Person[];
  johnList: Person[];
  newperson: Person; 

  imie: string;


  constructor(private client: ClientService) {
    this.newperson={id:null,name:null,number:null}
   }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.client.getAll().subscribe(value => {
      //this.person = value[1];
      this.personList = value;
    })
  }

  showNames(wybraneimie: string) {
    this.imie = wybraneimie;
    this.client.getByNames(wybraneimie).subscribe(answer => {
      console.log(answer);
      this.johnList = answer;
    })
  
  }

  addPerson(newimie: string, telefon: string){
    this.newperson.name=newimie;
    this.newperson.number = telefon;
      this.client.addNewPerson(this.newperson).subscribe(answer => {
      });
    this.fetchAll();
    this.reloadCurrentPage();
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}
