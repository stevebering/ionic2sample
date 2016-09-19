import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Facility} from "../../../model/facility";

/*
  Generated class for the FacilityListItem component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'facility-list-item',
  templateUrl: 'build/components/facility-list-item/facility-list-item.html'
})
export class FacilityListItem {

  @Input() facility: Facility;
  @Output() facilityClicked = new EventEmitter();
  @Output() facilityClaimed = new EventEmitter();

  constructor() {
  }

  public facilitySelected(facility: Facility) {
    console.log('Facility selected: ', facility);
    this.facilityClicked.emit(facility);
  }

  public claimFacility(facility: Facility) {
    console.log('Facility claimed: ', facility);
    this.facilityClaimed.emit(facility);
  }
}
