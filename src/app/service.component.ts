import { Component, Input } from '@angular/core';

import { Service } from './dtos/service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: [ './service.component.css' ]
})
export class ServiceComponent {
  @Input() service: Service;
  @Input() isChild: boolean = false;

  expanded: boolean = false;  

  toogleExpanded(): void {
    this.expanded = !this.expanded;    
  }
}