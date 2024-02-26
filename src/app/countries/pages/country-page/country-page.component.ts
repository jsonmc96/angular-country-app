import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {


  public country?: Country;
  public translations?: string[];

  constructor(private ar: ActivatedRoute,
    private router: Router,
    private cs: CountriesService) { }

  ngOnInit(): void {
    //logic of parameter capture from url
    this.ar.params
      .pipe(
        switchMap(({ id }) => this.cs.searchByAlphaCode(id))
      )
      .subscribe((country) => {
        // redirect url in the case that country is undefined
        if (!country) return this.router.navigateByUrl('');
        // cast object keys to array, for use *ngFor on component.html
        this.translations = Object.keys(country.translations);
        // return result as country
        return this.country = country;
      });
  }

}
