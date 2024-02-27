import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  constructor(private cs: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.cs.cacheStore.byCapital.countries;
    this.initialValue = this.cs.cacheStore.byCapital.term;
  }

  searchByCapital(value: string): void {
    this.cs.searchCapital(value)
      .subscribe(response => {
        this.countries = response;
      });
  }

}
