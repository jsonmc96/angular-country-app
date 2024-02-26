import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [

  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = "";

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit( value );
  }
}
