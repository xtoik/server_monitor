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

  count:number = 0;
  timer;

  constructor() { 
    this.timer = Observable.timer(2000, 2000);
    this.timer.subscribe(t => {
      this.changeServicesStatus(t);
    });
  }

  changeServicesStatus(tick): void {
    this.count++;

    this.services[0].isOk = this.count % 2 == 0;

    //this.services[1].isOk = this.count % 2 == 1;
    //this.services[1].services[0].isOk = this.count % 2 == 1;
    //this.services[1].services[0].services[0].isOk = this.count % 2 == 1;
    //this.services[1].services[0].services[0].services[1].isOk = this.count % 2 == 1;
    this.services[1].services[0].services[0].services[1].services[0].isOk = this.count % 2 == 1;
  }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }
}
