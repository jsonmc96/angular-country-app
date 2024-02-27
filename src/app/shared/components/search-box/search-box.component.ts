import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})

export class SearchBoxComponent implements OnInit {


  private debounce: Subject<string> = new Subject<string>();


  @Input()
  public placeholder: string = "";

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        console.log("This is flows", { value })
      })
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debounce.next(searchTerm)
  }

}
