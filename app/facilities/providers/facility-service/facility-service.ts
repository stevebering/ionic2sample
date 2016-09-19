import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Facility} from "../../../model/facility";
import { Observable } from 'rxjs/Observable';

import { Facilities } from './mock-facilities';

/*
  Generated class for the FacilityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FacilityService {

  constructor(private http: Http) {}

  public getFacilities(): Observable<Facility[]> {
    //return this.http.get('app/facilities')

    var observable = Observable.create((observer) => {
      setTimeout(() => {
        observer.next(Facilities);
      }, 2000) // delay 2 seconds
    });

    return observable;
  }
}

