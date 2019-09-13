import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlanet } from './iplanet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://swapi.co/api/planets/'

  constructor(
    private http: HttpClient
  ) { }

  getPlanetas(id = '') {
    return this.http.get<IPlanet>(this.apiUrl + id)
  }
}
