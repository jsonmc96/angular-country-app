import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public regionSelected?: Region;

  constructor(private cs: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.cs.cacheStore.byRegion.countries;
    this.regionSelected = this.cs.cacheStore.byRegion.region;
  }

  searchByRegion(value: Region): void {
    this.regionSelected = value;
    this.cs.searchRegion(value)
      .subscribe(response => {
        this.countries = response;
      });
  }
}
