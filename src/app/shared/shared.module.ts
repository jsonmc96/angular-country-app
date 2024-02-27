import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedSidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingComponent,
    SearchBoxComponent,
    SharedSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    SearchBoxComponent,
    SharedSidebarComponent,
  ]
})
export class SharedModule { }
