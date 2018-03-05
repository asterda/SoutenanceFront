import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Videoprojecteur} from "../../model/Videoprojecteur";

@Injectable()
export class VideoprojecteurService {

  constructor(private http: HttpClient){ }

  findOne(code: string): Observable<Videoprojecteur> {
    return this.http.get<Videoprojecteur>('http://localhost:8080/factoryBack/videoprojecteurs/' + code);
  }

  findAll(): Observable<Videoprojecteur[]> {
    return this.http.get<Videoprojecteur[]>('http://localhost:8080/factoryBack/videoprojecteurs');
  }

  delete(code: string): Observable<any> {
    return this.http.delete('http://localhost:8080/factoryBack/videoprojecteurs/' + code);
  }

  create(videoprojecteur: Videoprojecteur): Observable<Videoprojecteur> {
    return this.http.post<Videoprojecteur>('http://localhost:8080/factoryBack/videoprojecteurs', videoprojecteur);
  }

  update(videoprojecteur: Videoprojecteur): Observable<Videoprojecteur> {
    return this.http.put<Videoprojecteur>('http://localhost:8080/factoryBack/videoprojecteurs', videoprojecteur);
  }

}
