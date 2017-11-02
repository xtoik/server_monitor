import { Component, Input } from '@angular/core';

import { Service } from './dtos/service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: [ './service.component.css' ]
})
export class ServiceComponent {
  @Input() service: Service;

  expanded: boolean = false;

  toogleExpanded(): void {
    this.expanded = !this.expanded;    
  }

  getExpandIcon(): string {
    var ret:string;
    if (this.service.services.length > 0) {
      if (this.expanded) {
        ret = '../assets/minus.png';
      } else {
        ret = '../assets/plus.png';
      }      
    } else {
      ret = '../assets/transparent.png';
    }

    return ret;
  }
}