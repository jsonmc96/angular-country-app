import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHomePageComponent } from './pages/home-page/home-page.component';
import { SharedSidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    SharedHomePageComponent,
    SharedHomePageComponent,
    SharedSidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharedHomePageComponent,
    SharedHomePageComponent,
    SharedSidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
