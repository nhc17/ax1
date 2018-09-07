import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegnService {

  constructor(private http: HttpClient) { }

  addRegn(regn){
    return this.http.post(`${environment.api_url}regn`, regn);
  }
}
