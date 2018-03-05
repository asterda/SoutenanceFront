import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Formateur} from "../model/Formateur";

@Injectable()
export class FormateurService {

  constructor(private http: HttpClient) { }

  findOne(code: string): Observable<Formateur> {
    return this.http.get<Formateur>('http://localhost:8080/factoryBack/formateurs/' + code);
  }

  findAll(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>('http://localhost:8080/factoryBack/formateurs');
  }

  delete(code: string): Observable<any> {
    return this.http.delete('http://localhost:8080/factoryBack/formateurs/' + code);
  }

  create(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>('http://localhost:8080/factoryBack/formateurs', formateur);
  }

  update(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>('http://localhost:8080/factoryBack/formateurs', formateur);
  }

}
