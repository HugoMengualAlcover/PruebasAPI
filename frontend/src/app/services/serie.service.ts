import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serie} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  baseURL = 'http://localhost:3000/api/series/';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.baseURL);
  }

  updateSerie(id: string, serie: Serie): Observable<any> {
    return this.http.put(`http://localhost:3000/api/series/update/${id}`,serie);
  }

  newSerie(serie: Serie): Observable<any> {
    return this.http.post(this.baseURL, serie);
  }

  removeSerie(id: string): Observable<any> {
    return this.http.delete(this.baseURL+'delete/'+id);
  }
}
