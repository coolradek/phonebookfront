import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlAddress = 'http://localhost:8080/api/person'

  constructor(private http: HttpClient) { }

  private body : any;

  public getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.urlAddress+'/all')
  }

  public getByNames(imie: String): Observable<Person[]> {
    return this.http.get<Person[]>(this.urlAddress+'/names?name='+imie)
  }

  public addNewPerson(newperson: Person): Observable<any>{
    return this.http.post(this.urlAddress+'/add',newperson)
  }
}
