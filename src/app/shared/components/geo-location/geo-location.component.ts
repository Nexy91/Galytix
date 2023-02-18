import { IGeoLocation } from './interface/geo-location.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.scss'],
})
export class GeoLocationComponent {
  @Input() width: string = '300px';
  @Input() height: string = '300px';

  @Input() public set address(x: string) {
    this.location = `https://www.google.com/maps?q=${x}&output=embed`;
  }

  @Input() public set geo(x: IGeoLocation) {
    this.location = `https://www.google.com/maps?q=${x.Latitude}, ${x.Longitude}&output=embed`;
  }

  public location: string = '';
}
