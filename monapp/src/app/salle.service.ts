import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Salle} from "../model/Salle";

@Injectable()
export class SalleService {

  constructor(private http: HttpClient) { }

  public create(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>('http://localhost:8080/factoryBack/salles', salle);
  }

  // A completer avec le reste du crud (mapper l'api rest)

}
