import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Salle} from "../model/Salle";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SalleService {

  constructor(private http: HttpClient){ }

  findOne(code: string): Observable<Salle> {
    return this.http.get<Salle>('http://localhost:8080/factoryBack/salles/' + code);
  }

  findAll(): Observable<Salle[]> {
    return this.http.get<Salle[]>('http://localhost:8080/factoryBack/salles');
  }

  delete(code: string): Observable<any> {
    return this.http.delete('http://localhost:8080/factoryBack/salles/' + code);
  }

  create(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>('http://localhost:8080/factoryBack/salles', salle);
  }

  update(salle: Salle): Observable<Salle> {
    return this.http.put<Salle>('http://localhost:8080/factoryBack/salles', salle);
  }

}
