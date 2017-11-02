import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Service } from './dtos/service';
import { ServiceComponent } from './service.component';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html'
})
export class ServicesListComponent {
  @Input() services : Service[]; 
  @Input() expanded : boolean = false; 
}