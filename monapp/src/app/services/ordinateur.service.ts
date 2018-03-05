import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Ordinateur} from "../../model/Ordinateur";

@Injectable()
export class OrdinateurService {

  constructor(private http: HttpClient) { }

  findOne(code: string): Observable<Ordinateur> {
    return this.http.get<Ordinateur>('http://localhost:8080/factoryBack/ordinateurs/' + code);
  }

  findAll(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>('http://localhost:8080/factoryBack/ordinateurs');
  }

  delete(code: string): Observable<any> {
    return this.http.delete('http://localhost:8080/factoryBack/ordinateurs/' + code);
  }

  create(ordinateur: Ordinateur): Observable<Ordinateur> {
    return this.http.post<Ordinateur>('http://localhost:8080/factoryBack/ordinateurs', ordinateur);
  }

  update(ordinateur: Ordinateur): Observable<Ordinateur> {
    return this.http.put<Ordinateur>('http://localhost:8080/factoryBack/ordinateurs', ordinateur);
  }

}
