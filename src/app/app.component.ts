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
    { id: 1, name: "Client 1", isOk: true, services: [] },
    { 
      id: 2, 
      name: "Client 2", 
      isOk: true, 
      services: [
        { id: 3, name: "Client 2-SQL", isOk: true, services: [] },
        { id: 4, name: "Client 2-HTTP", isOk: true, services: [] }
      ] 
    },
    { id: 5, name: "Client 3", isOk: false, services: [] }
  ];
  title = 'Server Monitor';
}
