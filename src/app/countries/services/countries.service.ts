
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: undefined, countries: [] },
  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private get(path: string, term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${path}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError((error) => {
          console.log("Error capturado:", error);
          return of([]);
        })
      );
  }

  private getBy(path: string, term: string): Observable<Country | null> {
    const url = `${this.apiUrl}/${path}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError((error) => {
          console.log("Error capturado:", error);
          return of(null);
        })
      );
  }



  public searchCapital(term: string) {
    return this.get('capital', term)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveLocalStorage())
      );
  }

  public searchCountry(term: string) {
    return this.get('name', term)
      .pipe(
        tap(countries => this.cacheStore.byCountry = { term, countries }),
        tap(() => this.saveLocalStorage())
      );
  }

  public searchRegion(region: Region) {
    return this.get('region', region)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveLocalStorage())
      );
  }

  public searchByAlphaCode(term: string) {
    return this.getBy('alpha', term);
  }

}
