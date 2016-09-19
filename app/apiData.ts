/**
 * Created by stevebering on 9/19/16.
 */

import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Facilities } from './facilities/providers/facility-service/mock-facilities'


export class apiData implements InMemoryDbService {
  createDb() {
    let facilities = Facilities


    return {
      facilities: facilities
    }
  }
}
