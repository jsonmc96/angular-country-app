import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-coutry-page',
  templateUrl: './by-coutry-page.component.html',
  styles: ``
})
export class ByCoutryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private cs: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.cs.cacheStore.byCountry.countries;
    this.initialValue = this.cs.cacheStore.byCountry.term;
  }

  searchByCountry(value: string): void {
    this.cs.searchCountry(value)
      .subscribe(response => {
        this.countries = response;
      });
  }
}


