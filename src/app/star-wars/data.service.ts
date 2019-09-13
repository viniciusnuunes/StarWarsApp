import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from './iplanet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private planetUrl = 'https://swapi.co/api/planets/'
  private filmsUrl = 'https://swapi.co/api/films/'

  constructor(
    private http: HttpClient
  ) { }

  getPlanetas(id = '') {
    return this.http.get<IPlanet>(this.planetUrl + id)
  }

  getFilmes(id = '') {
    return this.http.get(this.filmsUrl + id)
  }
}
