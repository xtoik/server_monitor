import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Service } from './dtos/service'

@Injectable()
export class ServicesDataService {
  services: Service[] = [
    { id: 10, name: "Client 1", isOk: true, services: [] },
    { 
      id: 20, 
      name: "Client 2", 
      isOk: true, 
      services: [
        { id: 23, name: "Client 2-SQL", isOk: true, services: [
          { id: 25, name: "Client 2-SSIS", isOk: true, services: [
            { id: 26, name: "Client 2-SSIS-Job 1", isOk: true, services: [] },
            { id: 27, name: "Client 2-SSIS-Job 2", isOk: true, services: [
              { id: 28, name: "Client 2-SSIS-Job 2-Step 1", isOk: true, services: [] }
            ] }
          ] }          
        ] },
        { id: 29, name: "Client 2-HTTP", isOk: true, services: [] }
      ] 
    },
    { id: 30, name: "Client 3", isOk: false, services: [] }
  ];

  constructor() { }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }
}
