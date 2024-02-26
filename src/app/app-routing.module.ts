import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedHomePageComponent } from './shared/pages/home-page/home-page.component';
import { SharedAboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SharedContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: SharedHomePageComponent
  // },
  // {
  //   path: "about",
  //   component: SharedAboutPageComponent
  // },
  // {
  //   path: "contact",
  //   component: SharedContactPageComponent
  // },
  {
    path: "countries",
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: "**",
    redirectTo: "countries"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
