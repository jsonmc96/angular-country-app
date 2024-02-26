import { Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
