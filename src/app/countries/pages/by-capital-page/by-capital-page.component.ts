import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private cs: CountriesService) { }

  searchByCapital(value: string): void {
    this.cs.searchCapital(value)
      .subscribe(response => {
        this.countries = response;
      });
  }

}
