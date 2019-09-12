import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from './iplanet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://swapi.co/api/planets/1'

  constructor(
    private http: HttpClient
  ) { }

  getPlanetas() {
    return this.http.get<IPlanet[]>(this.apiUrl)
  }
}
