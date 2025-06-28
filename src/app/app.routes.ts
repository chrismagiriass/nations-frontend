// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryLanguagesComponent } from './pages/country-languages/country-languages.component';
import { MaxGdpComponent } from './pages/max-gdp/max-gdp.component';
import { FilteredStatsComponent } from './pages/filtered-stats/filtered-stats.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:code/languages', component: CountryLanguagesComponent },
  { path: 'max-gdp', component: MaxGdpComponent },
  { path: 'filtered-stats', component: FilteredStatsComponent }
];
