import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'http://localhost:8080/api/countries';

  constructor(private http: HttpClient) {}

  getAllCountries(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  getLanguagesByCountry(code: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${code}/languages`);
  }
}
