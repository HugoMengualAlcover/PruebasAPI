import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria, Serie} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  seriesURL = 'http://localhost:3000/api/series/';
  categoriasURL = 'http://localhost:3000/api/categorias/'

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.seriesURL);
  }

  updateSerie(id: string, serie: Serie): Observable<any> {
    return this.http.put(`http://localhost:3000/api/series/update/${id}`,serie);
  }

  newSerie(serie: Serie): Observable<any> {
    return this.http.post(this.seriesURL, serie);
  }

  removeSerie(id: string): Observable<any> {
    return this.http.delete(this.seriesURL+'delete/'+id);
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categoriasURL);
  }

  getCategoria(id: string): Observable<any> {
    return this.http.get(this.categoriasURL+'categoria'+id);
  }
}
