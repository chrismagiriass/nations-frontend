import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'http://localhost:8080/api';
  private countriesUrl = `${this.baseUrl}/countries`;
  private languagesUrl = `${this.baseUrl}/languages`;
  private statsUrl = `${this.baseUrl}/stats`;
  private regionsUrl = `${this.baseUrl}/regions`;

  constructor(private http: HttpClient) {}

  getAllCountries(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.countriesUrl}?page=${page}&size=${size}`);
  }

  getLanguagesByCountryId(countryId: number, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.languagesUrl}/by-country-id/${countryId}?page=${page}&size=${size}`);
  }

  getMaxGdpPerPopulation(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.statsUrl}/max-gdp-per-population?page=${page}&size=${size}`);
  }

  getStatsView(params: {
    page: number;
    size: number;
    regionId?: number;
    yearFrom?: number;
    yearTo?: number;
  }): Observable<any> {
    const queryParams = new URLSearchParams({
      page: params.page.toString(),
      size: params.size.toString(),
      ...(params.regionId ? { regionId: params.regionId.toString() } : {}),
      ...(params.yearFrom ? { yearFrom: params.yearFrom.toString() } : {}),
      ...(params.yearTo ? { yearTo: params.yearTo.toString() } : {}),
    });

    return this.http.get<any>(`${this.statsUrl}/view?${queryParams.toString()}`);
  }

  getAllRegions(): Observable<any[]> {
    return this.http.get<any[]>(this.regionsUrl);
  }
}
