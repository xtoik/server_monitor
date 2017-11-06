import { Component } from '@angular/core';

import { Service } from './dtos/service';
import { ServicesListComponent } from './services-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services: Service[] = [
    { id: 10, name: "Client 1", isOk: true, services: [] },
    { 
      id: 20, 
      name: "Client 2", 
      isOk: true, 
      services: [
        { id: 23, name: "Client 2-SQL", isOk: true, services: [
          { id: 25, name: "Client 2-SSIS", isOk: true, services: [] }          
        ] },
        { id: 27, name: "Client 2-HTTP", isOk: true, services: [] }
      ] 
    },
    { id: 30, name: "Client 3", isOk: false, services: [] }
  ];
  title = 'Server Monitor';
}
