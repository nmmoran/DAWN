import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://proyecto3-dawm-1cfa9-default-rtdb.firebaseio.com/peliculas.json')
  }
}
