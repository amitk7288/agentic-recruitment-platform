import { Component } from '@angular/core';
import { Search } from './search/search';
import { Trending } from './trending/trending';
import { SectorsLocations } from './sectors-locations/sectors-locations';

@Component({
  selector: 'app-home',
  imports: [Search, Trending, SectorsLocations],
  templateUrl: './home.html',
})
export class Home {}
