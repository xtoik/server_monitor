import { Component, OnInit } from '@angular/core';

import { Service } from './dtos/service';
import { ServicesDataService } from './services-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {    
  title = 'Server Monitor';
  services: Service[]; 

  constructor(private servicesDataService: ServicesDataService) {
  }

  ngOnInit() {
    this.getServices();
  }

  getServices(): void {
    this.servicesDataService.getServices()
                            .subscribe(services => this.services = services);
  }
}
