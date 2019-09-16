import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from './iplanet';
import { Observable } from 'rxjs';
import { IFilm } from './ifilm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private planetUrl = 'https://swapi.co/api/planets/'

  constructor(
    private http: HttpClient
  ) { }

  getPlanetas(id = ''): Observable<IPlanet> {
    return this.http.get<IPlanet>(this.planetUrl + id)
  }

  getFilmes(url: string): Observable<IFilm> {
    return this.http.get<IFilm>(url)
  }
}
