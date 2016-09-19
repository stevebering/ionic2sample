///<reference path="../../../../typings/tsd.d.ts"/>


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacilityListItem } from '../../components/facility-list-item/facility-list-item';
import {Facility} from "../../../model/facility";
import * as _ from 'lodash';

import { FacilityService } from '../../providers/facility-service/facility-service';

/*
  Generated class for the FacilityListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/facility-list/facility-list.html',
  directives: [FacilityListItem],
  providers: [FacilityService]
})
export class FacilityListPage {
  facilities: Array<Facility>;
  selectedFacility: Facility;
  errorMessage: string;
  mode: 'Observable';

  constructor(private navCtrl: NavController, private facilityService: FacilityService)
  { }

  public facilityClicked(facility: Facility) {
    console.log(`[FacilityList] Facility ${facility.name} clicked.`);
    this.selectFacility(facility);
  }

  public facilityClaimed(facility: Facility) {
    console.log(`[FacilityList] Facility ${facility.name} claimed.`);
    this.selectFacility(facility);
  }

  private selectFacility(facility: Facility) {
    _.each(this.facilities, (f: Facility) => {
      f.isActive = f.id === facility.id;
    });
  }

  ionViewWillEnter(): any {
    this.facilityService.getFacilities()
      .subscribe(
        facilities => {
          this.facilities = facilities;
          this.selectedFacility = _.find(this.facilities, (facility: Facility) => {
            return facility.isDefault;
          });
          this.selectedFacility.isActive = true;
        },
        error => this.errorMessage = <any>error
      );
  }
}
