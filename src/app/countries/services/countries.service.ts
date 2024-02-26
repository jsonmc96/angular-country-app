
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  private get(path: string, term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${path}/${term}`)
      .pipe(
        catchError((error) => {
          console.log("Error capturado:", error);
          return of([]);
        })
      );
  }
  private getBy(path: string, term: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/${path}/${term}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError((error) => {
          console.log("Error capturado:", error);
          return of(null);
        })
      );
  }

  public searchCapital(term: string) {
    return this.get('capital', term);
  }


  public searchCountry(term: string) {
    return this.get('name', term);
  }

  public searchRegion(term: string) {
    return this.get('region', term);
  }
  public searchByAlphaCode(term: string) {
    return this.getBy('alpha', term);
  }

}
