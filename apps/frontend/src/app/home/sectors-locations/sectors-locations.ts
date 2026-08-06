import { Component } from '@angular/core';
import { SecLocGridItem } from './sec-loc-grid-item/sec-loc-grid-item';
import { secLoc } from '../../../data/sec-loc';

@Component({
  selector: 'app-sectors-locations',
  imports: [SecLocGridItem],
  templateUrl: './sectors-locations.html',
})
export class SectorsLocations {
  secLocData = secLoc;
  isSector = true;
  isLocation = false;

  showSectors() {
    this.isSector = true;
    this.isLocation = false;
  }

  showLocations() {
    this.isSector = false;
    this.isLocation = true;
  }
}
