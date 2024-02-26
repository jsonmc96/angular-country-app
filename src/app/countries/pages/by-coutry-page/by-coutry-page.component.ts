import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-coutry-page',
  templateUrl: './by-coutry-page.component.html',
  styles: ``
})
export class ByCoutryPageComponent {
  public countries: Country[] = [];

  constructor(private cs: CountriesService) { }

  searchByCountry(value: string): void {
    this.cs.searchCountry(value)
      .subscribe(response => {
        this.countries = response;
      });
  }
}


