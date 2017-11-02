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
    { id: 1, name: "Mahou", isOk: true, services: [] },
    { 
      id: 2, 
      name: "Carlsberg", 
      isOk: true, 
      services: [
        { id: 3, name: "Carlsberg-SQL", isOk: true, services: [] },
        { id: 4, name: "Carlsberg-HTTP", isOk: true, services: [] }
      ] 
    },
    { id: 5, name: "AB InBev", isOk: false, services: [] }
  ];
  title = 'Server Monitor';
}
