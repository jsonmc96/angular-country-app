import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    SharedSidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharedSidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
