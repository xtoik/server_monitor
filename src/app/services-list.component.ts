import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Service } from './dtos/service';
import { ServiceComponent } from './service.component';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  @Input() services : Service[]; 
  @Input() expanded : boolean = false; 
  @Input() isChild: boolean = false;
}